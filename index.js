const https = require('https');

const app = require('./app');
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
    logger.info(`Application started on port: ${listen.address().port}`);

    process.on('SIGTERM', () => {
      listen.close();
    });

    process.on('SIGINT', () => {
      listen.close();
    });
  })
  .catch(error => {
    logger.error(error);
    process.exit(1);
  });
