export function customThunk(store) {
  return function (next) {
    return function (action) {
      if (action instanceof Function) {
        const { dispatch, getState } = store;
        customThunk.extraArgumnet
          ? action(dispatch, getState, customThunk.extraArgumnet)
          : action(dispatch, getState);
        return;
      }
      next(action);
    };
  };
}

customThunk.addExtraArgument = function (extraArgumnet) {
  this.extraArgumnet = extraArgumnet;
  return this;
};
