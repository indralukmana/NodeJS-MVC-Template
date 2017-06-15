const mongoose = require('mongoose')

// import environment variables
require('dotenv').config({ path: 'variables.env' })

// connect to mongodb and handle bad connection
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.error(`💔💔💔💔💔💔 ➡ ${err.message}`)
})

// start the app
const app = require('./app')
app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'), () => {
  console.log(`Express is running on PORT ${server.address().port}`)
})
