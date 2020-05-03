const express = require('express');
const router = express.Router();
const controller = require ('../controllers/twilioController');

// router.get('/:companyId', controller.getCompany);
router.post('/', controller.createTwilioRoom);
router.get('/room', controller.enterRoom);

module.exports = router;