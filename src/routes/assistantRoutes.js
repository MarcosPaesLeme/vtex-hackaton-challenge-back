const express = require('express');
const router = express.Router();
const controller = require ('../controllers/assistantController');


router.get('/', controller.getAssistent);
router.post('/', controller.createAssistant);

module.exports = router;