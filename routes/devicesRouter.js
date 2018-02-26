const express = require('express');
const httpStatus = require('http-status-codes');

const store = require('../store');
const { turnOn, turnOff } = require('../store/actions');

const router = express.Router();


router.get('/', (req, res) => {
  const state = store.getState();
  const devicesId = Object.keys(state);

  const devices = devicesId.map(id => ({
    id,
    state: state[id].params.switch,
  }));

  res.send(devices);
});

router.get('/:deviceId', (req, res) => {
  const id = req.params.deviceId;
  const state = store.getState();

  if (!state[id]) {
    return res.status(httpStatus.NOT_FOUND).send(httpStatus.getStatusText(httpStatus.NOT_FOUND));
  }

  const device = {
    id,
    state: state[id].params.switch,
  };

  res.send(device);
});

router.get('/:deviceId/on', (req, res) => {
  const id = req.params.deviceId;

  const state = store.getState();

  if (!state[id]) {
    return res.status(httpStatus.NOT_FOUND).send(httpStatus.getStatusText(httpStatus.NOT_FOUND));
  }

  store.dispatch(turnOn(id));
  res.send(`DEVICE WITH ID: ${id} TURNED ON`);
});

router.get('/:deviceId/off', (req, res) => {
  const id = req.params.deviceId;

  const state = store.getState();

  if (!state[id]) {
    return res.status(httpStatus.NOT_FOUND).send(httpStatus.getStatusText(httpStatus.NOT_FOUND));
  }

  store.dispatch(turnOff(id));
  res.send(`DEVICE WITH ID: ${id} TURNED OFF`);
});

module.exports = router;
