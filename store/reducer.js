const initialState = require('./initialState');
const {
  REGISTER,
  UPDATE,
} = require('./actionTypes');

module.exports = (state = initialState, action) => {
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
