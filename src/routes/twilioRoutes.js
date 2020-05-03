const express = require('express');
const router = express.Router();
const controller = require ('../controllers/twilioController');

router.get('/:room', controller.getTwilioRoom);
router.post('/', controller.createTwilioRoom);
router.get('/token', controller.createTwilioRoom);

module.exports = router;