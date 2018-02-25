const logger = require('./services/logger');
const uuid = require('uuid/v4');

module.exports = connection => {
  const id = uuid();

  connection.on('text', text => logger.log('TEXT', id, text));

  connection.on('close', () => logger.log('CLOSE', id));

  connection.on('error', logger.error);
};
