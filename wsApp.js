const logger = require('./services/logger');

module.exports = connection => {
  connection.on('error', logger.error);
};
