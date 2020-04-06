const router = require('express').Router();

const calculatorController = require('../controller/calculator');

router.get('/calculator', calculatorController);

module.exports = router;
