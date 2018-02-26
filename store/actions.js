const { DISCONNECT } = require('./actionTypes');

const disconnect = id => ({
  type: DISCONNECT,
  id,
});

module.exports = {
  disconnect,
};
