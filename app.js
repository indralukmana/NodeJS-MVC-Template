// express library import
const express = require('express')
const session = require('express-session')

// create the Express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname), 'views') // the folder for template files
app.set('view engine', 'pug')
