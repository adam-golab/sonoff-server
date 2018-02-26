function sideEffectsMiddleware(sideEffects) {
  return ({ getState, dispatch }) => next => action => {
    if (typeof sideEffects[action.type] === 'function') {
      sideEffects[action.type]({ getState, dispatch, action });
    }
    next(action);
  };
}

module.exports = sideEffectsMiddleware;
