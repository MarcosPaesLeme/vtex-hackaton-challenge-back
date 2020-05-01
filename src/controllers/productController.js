'use strict'

const ProductModel = require('../models/productModel');
const CompanyModel = require('../models/companyModel');

exports.getProducts = async (req, res) => {
  try {
    const companyId = req.params.companyId;

    if (!companyId) res.status(400).send({ message: 'Missing parameters'});

    const products = await ProductModel.find();

    return res.status(201).send(products);
  } catch(err) {
    res.status(400).send({ message: err});
  }
}

exports.createProduct = async (req, res) => {
  try {
    const companyId = req.body.companyId;

    const company = await CompanyModel.findById(companyId).lean();

    if (!companyId || !company) return res.status(400).send({ message: 'Missing parameters'});

    const product = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      type: req.body.type,
      companyId: company._id,
      image: req.body.image
    };

    await ProductModel.create(product);

    return res.status(201).send({ message: "Product created!" })

  } catch(err) {
    res.status(400).send({ message: err});
  }
}
