const logger = require('../services/logger');
const initialState = require('./initialState');
const {
  REGISTER,
} = require('./actionTypes');

module.exports = (state = initialState, action) => {
  logger.log(action.type, action.id);
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, {
        [action.id]: {
          deviceInfo: action.payload,
          connection: action.connection,
          enabled: false,
        },
      }, state);
    default:
      return state;
  }
};
