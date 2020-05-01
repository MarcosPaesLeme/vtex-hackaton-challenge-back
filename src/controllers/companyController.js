'use strict'

const CompanyModel = require('../models/companyModel');

exports.getCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;

    if (!companyId) res.status(400).send({ message: 'Missing parameters'});

    const company = await CompanyModel.findById(companyId);

    return res.status(201).send(company);
  } catch(err) {
    res.status(400).send({ message: err});
  }
}

exports.createCompany = async (req, res) => {
  try {
    const company = {
      fantasyName: req.body.fantasyName,
      locations: req.body.locations,
      cnpj: req.body.cnpj,
    };

    await CompanyModel.create(company);

    res.status(201).send({ message: "Company created!" })

  } catch(err) {
    res.status(400).send({ message: err});
  }
}
