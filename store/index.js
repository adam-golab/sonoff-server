const { createStore } = require('redux');

const reducer = require('./reducer');

module.exports = createStore(reducer);
