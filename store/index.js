const { createStore, compose, applyMiddleware } = require('redux');

const reducer = require('./reducer');
const initialState = require('./initialState');
const sideEffectsMiddleware = require('./sideEffectsMiddleware');

const sideEffects = require('./sideEffects');

module.exports = createStore(reducer, initialState, compose(
  applyMiddleware(
    sideEffectsMiddleware(sideEffects)
  )
));
