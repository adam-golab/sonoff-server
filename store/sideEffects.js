const send = require('../services/wsSender');
const {
  REGISTER,
  DATE,
} = require('./actionTypes');

module.exports = {
  [REGISTER]: ({ connection, payload }) => send(connection, {
    error: 0,
    deviceid: payload.deviceid,
    apikey: '123456789-1234-1234-1234-123456789123',
  }),
  [DATE]: ({ connection, payload }) => send(connection, {
    error: 0,
    date: new Date().toISOString(),
    deviceid: payload.deviceid,
    apikey: '123456789-1234-1234-1234-123456789123',
  }),
};
