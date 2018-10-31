const https = require('https');
const ws = require('nodejs-websocket');

const app = require('./app');
const wsApp = require('./wsApp');
const config = require('./config');
const logger = require('./services/logger');

config
  .then(config => {
    const listen = https.createServer({
      key: config.KEY,
      cert: config.CERT,
      requestCert: false,
      rejectUnauthorized: false,
    }, app).listen(config.PORT);
    ws.createServer({
      secure: true,
      key: config.KEY,
      cert: config.CERT,
    }, wsApp).listen(config.WEBSOCKET_PORT);

    logger.info(`Application started on ports: http - ${config.PORT}, ws - ${config.WEBSOCKET_PORT}`);

    process.on('SIGTERM', () => {
      listen.close();
    });

    process.on('SIGINT', () => {
      listen.close();
    });

    listen.on('close', () => {
      process.exit();
    });
  })
  .catch(error => {
    logger.error(error);
    process.exit(1);
  });
