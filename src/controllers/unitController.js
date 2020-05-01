'use strict'

const UnitModel = require('../models/unitModel');

exports.createUnit = async (req, res) => {
  try {
    const unit = {
      name: req.body.name,
      companyId: req.body.companyId,
      location: req.body.location,
    };

    await UnitModel.create(unit);

    res.status(201).send({ message: "Unit created!" })

  } catch(err) {
    res.status(400).send({ message: err});
  }
}
