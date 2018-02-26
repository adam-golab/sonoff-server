function sideEffectsMiddleware(sideEffects) {
  return () => next => action => {
    if (typeof sideEffects[action.type] === 'function') {
      sideEffects[action.type](action);
    }
    next(action);
  };
}

module.exports = sideEffectsMiddleware;
