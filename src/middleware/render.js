const bundlesManager = require('../utils/bundlesManager')

module.exports = view =>
  function(req, res, next) {
    const bundle = bundlesManager.get(view)

    if (!bundle) {
      return next(new Error('Bundle not found, FIX ME'))
    }

    const content = bundle.render

    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${content.title || 'ssr-react'}</title>
        <style>${content.styleTags}</style>
    </head>
    <body>
        <div id="page">${content.DOM}</div>
    </body>
    </html>`)
  }
