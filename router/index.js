const router = require('express').Router();
const appRouter = require('./apps');

const indexController = require('../controller/index');

router.use('/apps', appRouter);

router.get('/', indexController);

module.exports = router;
