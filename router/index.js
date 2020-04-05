const router = require('express').Router();
const indexController = require('../controller/index');

router.get('', indexController);

module.exports = router;
