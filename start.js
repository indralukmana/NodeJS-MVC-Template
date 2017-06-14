const mongoose = require('mongoose')

// import environment variables
require('dotenv').config({ path: 'variables.env' })

// connect to mongodb and handle bad connection
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.error(`💔💔💔💔💔💔 ➡ ${err.message}`)
})
