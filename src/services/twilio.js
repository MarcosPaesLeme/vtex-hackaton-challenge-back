// TWILIO_ACCOUNT_SID=ACd23e82ce4b41ab3e80b8605772141b58
// TWILIO_API_KEY=SKbfd73c2d876849d60319268a1d896cd6
// TWILIO_API_SECRET=YqHqqCwdJbgQcWCS53r2lkRq1moCViMp
const TWILIO_ACCOUNT_SID = 'ACd23e82ce4b41ab3e80b8605772141b58';
const TWILIO_API_KEY = 'SKbfd73c2d876849d60319268a1d896cd6';
const TWILIO_API_SECRET = 'YqHqqCwdJbgQcWCS53r2lkRq1moCViMp';
const AUTH_TOKEN = '2af12e138af58f89695ad4daf7d18bd4';

const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

exports.getAccessRoom = async function (user_identity, room) {
  try {

    const token = new AccessToken(
      TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY,
      TWILIO_API_SECRET,
    );

    token.identity = user_identity;

    const grant = new VideoGrant();
    grant.room = room;
    token.addGrant(grant);

    return token.toJwt();

  } catch (err) {
    console.log(err)
   }
};

exports.createRoom = async function(user_identity, room) {
  try {
    const authToken = await this.getAccessRoom(user_identity, room);

    const client = require('twilio')(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

    return await client.video.rooms.create({uniqueName: room})
                  .then(room => {
                    console.log(room);
                    return room;
                  });
  } catch(err) {
    console.log(err)
  }
}

exports.getRooms = async function(room) {
  try {
    // const authToken = await this.getAccessRoom(user_identity, room);
    
    const client = require('twilio')(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

    return await client.video.rooms.list({ limit: 20})
                  .then(rooms => {
                    rooms.forEach(r => console.log(r.sid))
                    return rooms
                  });
  } catch(err) {
    console.log(err)
  }
}

exports.authToken = async function() {
  try {
    return AUTH_TOKEN;
  } catch(err) {
    console.log(err)
  }
}