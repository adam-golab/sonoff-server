const express = require('express');
const httpStatus = require('http-status-codes');

const store = require('../store');

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
  res.send(`DEVICE WITH ID: ${req.params.deviceId} TURNED ON`);
});

router.get('/:deviceId/off', (req, res) => {
  res.send(`DEVICE WITH ID: ${req.params.deviceId} TURNED OFF`);
});

module.exports = router;
