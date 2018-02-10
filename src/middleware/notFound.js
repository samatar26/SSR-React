module.exports = function notFoundMiddleware(req, res, next) {
  res.status(404).send('Sorry, page not found!')
}
