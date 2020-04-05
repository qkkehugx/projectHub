const express = require('express');
const indexRouter = require('./router/index');

const app = express();

const dir = __dirname;

app.set('view engine', 'pug');
app.set('views', `${dir}/views`);

app.use('/', indexRouter);

module.exports = app;
