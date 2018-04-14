const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));

app.use('assets', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

module.exports = app;