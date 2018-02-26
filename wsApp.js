const uuid = require('uuid/v4');

const logger = require('./services/logger');
const store = require('./store');
const { DISCONNECT } = require('./store/actionTypes');

module.exports = connection => {
  const id = uuid();

  connection.on('text', text => {
    const payload = JSON.parse(text);
    const action = { id, type: payload.action, payload, connection };
    store.dispatch(action);
  });

  connection.on('close', () => {
    const action = { type: DISCONNECT, id };
    store.dispatch(action);
  });

  connection.on('error', logger.error);
};
