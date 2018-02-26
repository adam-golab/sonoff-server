const send = require('../services/wsSender');
const {
  REGISTER,
  DATE,
} = require('./actionTypes');

const ack = ({ deviceid }) => ({
  error: 0,
  deviceid,
  apikey: '123456789-1234-1234-1234-123456789123',
});

module.exports = {
  [REGISTER]: ({ connection, payload }) => send(connection, ack(payload)),
  [DATE]: ({ connection, payload }) => send(connection, Object.assign({
    date: new Date().toISOString(),
  }, ack(payload))),
};
