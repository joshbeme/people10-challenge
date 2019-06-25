const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const Router = require('./routes/index')

app.use(morgan());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router)

module.exports = app;