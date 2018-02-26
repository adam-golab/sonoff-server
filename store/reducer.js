const initialState = require('./initialState');
const {
  REGISTER,
  UPDATE,
} = require('./actionTypes');

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({
        [action.id]: {
          deviceInfo: action.payload,
          connection: action.connection,
          params: {},
        },
      }, state);
    case UPDATE:
      return Object.assign({
        [action.id]: Object.assign({
          params: action.payload.params,
        }, state[action.id]),
      }, state);
    default:
      return state;
  }
};
