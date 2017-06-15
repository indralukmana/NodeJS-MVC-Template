// error handler for async/await
exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

// error handler for route that is not found
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}
