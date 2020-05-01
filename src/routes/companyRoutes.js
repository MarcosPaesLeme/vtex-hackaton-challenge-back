const express = require('express');
const router = express.Router();
const controller = require ('../controllers/companyController');

router.get('/:companyId', controller.getCompany);
router.post('/', controller.createCompany);

module.exports = router;