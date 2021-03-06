// https://stackoverflow.com/a/61439698

export const combineReducers = slices => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action)
    }),
    state
  );

export const reduceReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
