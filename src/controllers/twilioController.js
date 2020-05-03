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

const { connect } = require('twilio-video');
const AccessToken = require('twilio').jwt.AccessToken;

exports.enterRoom = async(req, res) => {

  connect('2af12e138af58f89695ad4daf7d18bd4', { name:'my-new-room' }).then(room => {
    console.log(`Successfully joined a Room: ${room}`);
    room.on('participantConnected', participant => {
      console.log(`A remote Participant connected: ${participant}`);
    });
  }, error => {
    console.error(`Unable to connect to Room: ${error.message}`);
  });
  
}


