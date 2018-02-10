const express = require('express')

const app = express()

app.disable('x-powered-by')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
  console.log('Renderer Server running', { PORT: 3000 })
})
