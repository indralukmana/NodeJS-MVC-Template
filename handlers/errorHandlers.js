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

// flash validation errors for mongoDB
exports.flashValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err)
  const errorKeys = Object.keys(err.errors)
  errorKeys.forEach(key => req.flash('error', err.errors[key].message))
  res.redirect('back')
}
