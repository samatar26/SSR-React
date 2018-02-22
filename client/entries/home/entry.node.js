import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './app'

import { ServerStyleSheet } from 'styled-components'

const coreNodeEntry = App => {
  const sheet = new ServerStyleSheet()
  const DOM = ReactDOM.renderToString(sheet.collectStyles(<App />))

  return {
    DOM,
    styleTags: sheet.getStyleTags(),
  }
}

export default coreNodeEntry(App)
