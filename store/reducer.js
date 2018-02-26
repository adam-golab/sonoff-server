// const logger = require('../services/logger');
const initialState = require('./initialState');
const {
  REGISTER,
  UPDATE,
} = require('./actionTypes');

module.exports = (state = initialState, action) => {
  // logger.log(action.type, action.id, action.payload);
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        [action.id]: {
          deviceInfo: action.payload,
          connection: action.connection,
          params: {},
        },
      };
    case UPDATE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          params: action.payload.params,
        },
      };
    default:
      return state;
  }
};
