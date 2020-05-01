'use strict'

const UserModel = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const cpf = req.body.cpf;
    const password = req.body.password;

    if (!cpf || !password) return res.status(400).send({ message: 'Missing parameters'});

    const user = await UserModel.find({ cpf: cpf,  password: password}).lean();

    return res.status(201).send(user);
  } catch(err) {
    return res.status(400).send({ message: err});
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      location: req.body.location,
      cpf: req.body.cpf,
      bornDate: req.body.bornDate,
      password: req.body.password,
    };

    await UserModel.create(user);

    return res.status(201).send({ message: "User created!" })

  } catch(err) {
    return res.status(400).send({ message: err});
  }
}
