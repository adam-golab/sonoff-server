const express = require('express');

const config = require('./config');
const logger = require('./services/logger');

const app = express();

const listen = app.listen(config.PORT);
logger.info(`Application started on port: ${listen.address().port}`);

process.on('SIGTERM', () => {
  listen.close();
});

process.on('SIGINT', () => {
  listen.close();
});

