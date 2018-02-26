const uuid = require('uuid/v4');

const logger = require('./services/logger');
const store = require('./store');
const { disconnect } = require('./store/actions');

module.exports = connection => {
  const id = uuid();

  connection.on('text', text => {
    const payload = JSON.parse(text);
    if (payload.action) {
      const action = { id, type: payload.action, payload, connection };
      store.dispatch(action);
    }
  });

  connection.on('close', () => {
    store.dispatch(disconnect(id));
  });

  connection.on('error', logger.error);
};
