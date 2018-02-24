const fs = require('fs')
const path = require('path')

// Bundles path
const _bundlesPath = path.join(__dirname, '../../bundles')
// Return list of bundles in folder
const _readBundlesFolder = () => fs.readdirSync(_bundlesPath)

// Object defining all bundles
const bundles = _readBundlesFolder().reduce((bundles, name) => {
  const view = name.replace('.js', '')
  const bundle = require(path.join(_bundlesPath, name))

  bundles[view] = {
    name: view,
    render: bundle.default,
  }
  return bundles
}, {})

module.exports = {
  get: function(view) {
    return bundles[view]
  },
}
