const send = require('../services/wsSender');
const {
  REGISTER,
  DATE,
  TURN_ON,
  TURN_OFF,
} = require('./actionTypes');

const ack = ({ deviceid }) => ({
  error: 0,
  deviceid,
  apikey: '123456789-1234-1234-1234-123456789123',
});

module.exports = {
  [REGISTER]: ({ action: { connection, payload } }) => send(connection, ack(payload)),

  [DATE]: ({ action: { connection, payload } }) => send(connection, {
    ...ack(payload),
    date: new Date().toISOString(),
  }),

  [TURN_ON]: ({ getState, action: { id } }) => {
    const state = getState();
    const device = state[id];

    return send(device.connection, {
      ...ack(device.deviceInfo),
      action: 'update',
      params: { switch: 'on' },
      userAgent: 'app',
      sequence: Date.now().toString(),
      ts: 0,
      from: 'app',
    });
  },

  [TURN_OFF]: ({ getState, action: { id } }) => {
    const state = getState();
    const device = state[id];

    return send(device.connection, {
      ...ack(device.deviceInfo),
      action: 'update',
      params: { switch: 'off' },
      userAgent: 'app',
      sequence: Date.now().toString(),
      ts: 0,
      from: 'app',
    });
  },
};
