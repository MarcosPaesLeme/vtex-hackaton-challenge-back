const express = require('express');
const router = express.Router();
const controller = require ('../controllers/orderedController');

router.post('/', controller.registerNewOrdered);

module.exports = router;