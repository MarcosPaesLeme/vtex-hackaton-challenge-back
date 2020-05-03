const express = require('express');
const router = express.Router();
const controller = require ('../controllers/twilioController');

router.get('/rooms/:room', controller.getTwilioRoom);
router.get('/token', controller.authToken);
router.post('/', controller.createTwilioRoom);

module.exports = router;