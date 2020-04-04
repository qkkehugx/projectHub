const express = require('express');

const app = express();

const dir = __dirname;

app.set('view engine', 'pug');
app.set('views', `${dir}/views`);


module.exports = app;
