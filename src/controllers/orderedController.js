'use strict'

const CompanyModel = require('../models/companyModel');
const UserModel = require('../models/userModel');
const OrderedModel = require('../models/orderedModel');
const ProductModel = require('../models/productModel');
const UnitModel = require('../models/unitModel');
const CoordinatesService = require('../services/distancies');
const moment = require('moment');

exports.registerNewOrdered = async (req, res) => {
  try {
    const userId = req.body.userId;
    const productName = req.body.product;
    const quantity = req.body.quantity;

    if (!userId || !productName || !quantity) res.status(400).send({
      message: 'Missing parameters'
    });

    const user = await UserModel.findById(userId).lean();

    const companiesIdsHaveProduct = await ProductModel.find({
      name: productName,
      quantity: { $gte: quantity }
    })
      .select({
        companyId: 1,
        _id: 1,
        price: 1,
      })
      .lean();

    const companiesNear = await UnitModel.findOne({
      companyId: {
        $in: companiesIdsHaveProduct.map(company => company.companyId)
      },
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [
              user.location[0],
              user.location[1]
            ]
          },
          $maxDistance: 5 * 1000
        }
      }
    })
      .lean();

    const coordinates = await CoordinatesService.getDistanceInfo(user, companiesNear);

    const order = {
      products: companiesIdsHaveProduct.find(product => String(product.companyId) === String(companiesNear.companyId))._id,
      userId: user._id,
      quantity: quantity,
      estimatedTime: moment().add(coordinates.duration * 2, 'seconds'),
      distance: coordinates.distance / 1000,
      price: companiesIdsHaveProduct.find(product => String(product.companyId) === String(companiesNear.companyId)).price * quantity,
    }

    const ordered = await OrderedModel.create(order);

    await ProductModel.updateOne({
      _id: order.products
    },{ 
      $inc: { quantity: -quantity } 
    })



    return res.status(201).send(ordered);
  } catch (err) {
    res.status(400).send({ message: err });
  }
}

exports.createCompany = async (req, res) => {
  try {
    const company = {
      fantasyName: req.body.fantasyName,
      location: req.body.location,
      cnpj: req.body.cnpj,
    };

    await CompanyModel.create(company);

    res.status(201).send({ message: "User created!" })

  } catch (err) {
    res.status(400).send({ message: err });
  }
}
