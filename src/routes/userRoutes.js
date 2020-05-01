const express = require('express');
const router = express.Router();
const controller = require ('../controllers/userController');

router.post('/auth', controller.getUser);
router.post('/', controller.createUser);

module.exports = router;