const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('LIST OF ALL DEVICES');
});

router.get('/:deviceId', (req, res) => {
  res.send(`STATUS OF DEVICE WITH ID: ${req.params.deviceId}`);
});

router.get('/:deviceId/on', (req, res) => {
  res.send(`DEVICE WITH ID: ${req.params.deviceId} TURNED ON`);
});

router.get('/:deviceId/off', (req, res) => {
  res.send(`DEVICE WITH ID: ${req.params.deviceId} TURNED OFF`);
});

module.exports = router;
