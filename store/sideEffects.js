const {
  REGISTER,
} = require('./actionTypes');

module.exports = {
  [REGISTER]: ({ connection, payload }) => connection.send(JSON.stringify({
    error: 0,
    deviceid: payload.deviceid,
    apikey: '123456789-1234-1234-1234-123456789123',
  })),
};
