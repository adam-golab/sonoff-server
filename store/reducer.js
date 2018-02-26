const initialState = require('./initialState');
const {
  REGISTER,
  UPDATE,
} = require('./actionTypes');

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        [action.id]: {
          deviceInfo: action.payload,
          connection: action.connection,
          params: {},
        },
        ...state,
      };
    case UPDATE:
      return {
        [action.id]: {
          params: action.payload.params,
          ...state[action.id],
        },
        ...state,
      };
    default:
      return state;
  }
};
