'use strict'
const TwilioService = require('../services/twilio');
const UserModel = require('../models/userModel');

exports.createTwilioRoom = async (req, res) => {
  try {
    
    const userIdentity = req.body.userIdentity;
    const roomName = req.body.roomName;

    const room = await TwilioService.createRoom(userIdentity, roomName);

    res.status(201).send(room)

  } catch (err) {
    res.status(400).send({ message: err });
  }
}

exports.getTwilioRoom = async (req, res) => {
  try {
    
    const room = req.params.room;

    const rooms = await TwilioService.getRooms(room);

    res.status(201).send(rooms)
  } catch (err) {
    res.status(400).send({ message: err });
  }
}

exports.authToken = async (req, res) => {
  try {
  
  const userName = await UserModel.findOne({ cpf: '98680261050' }).select('name').lean();

  const token = await TwilioService.getAccessRoom(userName.name);

  res.status(201).send({
    identity: userName,
    room: `${userName.name}-room`,
    token
  })
} catch (err) {
  res.status(400).send({ message: err });
}
}