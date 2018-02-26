const {
  DISCONNECT,
  TURN_ON,
  TURN_OFF,
} = require('./actionTypes');

const disconnect = id => ({
  type: DISCONNECT,
  id,
});

const turnOn = id => ({
  type: TURN_ON,
  id,
});

const turnOff = id => ({
  type: TURN_OFF,
  id,
});

module.exports = {
  disconnect,
  turnOn,
  turnOff,
};
