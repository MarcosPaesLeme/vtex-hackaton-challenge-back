const express = require('express');
const router = express.Router();
const controller = require ('../controllers/unitController');

router.post('/', controller.createUnit);

module.exports = router;