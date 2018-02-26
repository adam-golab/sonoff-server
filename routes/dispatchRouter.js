const express = require('express');
const config = require('../config');

const router = express.Router();

config.then(config => {
  router.post('/device', (req, res) => {
    res.json({
      error: 0,
      reason: 'ok',
      IP: config.IP,
      port: config.WEBSOCKET_PORT,
    });
  });
});

module.exports = router;
