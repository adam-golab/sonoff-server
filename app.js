const express = require('express');

const deviceRouter = require('./routes/devicesRouter');
const dispatchRouter = require('./routes/dispatchRouter');

const app = express();

app.use('/devices', deviceRouter);
app.use('/dispatch', dispatchRouter);

module.exports = app;
