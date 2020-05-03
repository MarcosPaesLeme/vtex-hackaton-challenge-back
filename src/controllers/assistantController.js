'use strict'

const assistantModel = require('../models/assistantModel');

exports.getAssistents = async (req, res) => {
  try {
        const assistants = await assistantModel.find();
        res.status(201).send(assistants);

  } catch(err) {
    res.status(400).send({ message: err});
  }
}
exports.createAssistant = async (req, res) => {
  try {

    const assistant = {
      name: req.body.name,
      lastName: req.body.lastName,
      picture: req.body.picture,
      email: req.body.email,
      knowWebsites: req.body.knowWebsites,
    };

    await assistantModel.create(assistant);

    res.status(201).send({ message: "Assistant Created!!" })
    
  } catch (error) {
    res.status(400).send({ message: error});
  }
}

