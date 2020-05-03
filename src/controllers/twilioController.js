'use strict'
const TwilioService = require('../services/twilio');

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

    console.log('room', room);

    const rooms = await TwilioService.getRooms(room);

    console.log(rooms);

    res.status(201).send(rooms)
  } catch (err) {
    res.status(400).send({ message: err });
  }
}

exports.authToken = async (req, res) => {
  return await TwilioService.authToken();
}