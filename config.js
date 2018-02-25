const path = require('path');

const fileReader = require('./services/fileReader');

module.exports = Promise.all([
  fileReader(path.join(__dirname, './certs/cert.pem')),
  fileReader(path.join(__dirname, './certs/key.pem')),
])
  .then(([cert, key]) => ({
    PORT: process.env.PORT || 8080,
    WEBSOCKET_PORT: process.env.WEBSOCEKT_PORT || 8090,
    KEY: key,
    CERT: cert,
  }));

