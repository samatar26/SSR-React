const express = require('express')

//Middleware
const notFound = require('./middleware/notFound')

const app = express()

app.disable('x-powered-by')

app.get('/', (req, res) => res.send('Hello World!'))

//Catch 404's
app.use(notFound)

//Start the server and bind to port
app.listen(3000, () => {
  console.log('Renderer Server running', { PORT: 3000 })
})
