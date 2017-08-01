/** middleware for redux **/
export function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      // log a fancy message and action
      console.log('Hello, this is your captain speaking.', action);
      // it expects the dispatcher to return an action
      return next(action);
    };
  };
}
