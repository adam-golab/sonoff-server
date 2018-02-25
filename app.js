const express = require('express');

const deviceRouter = require('./routes/devicesRouter');

const app = express();

app.use('/devices', deviceRouter);

module.exports = app;
