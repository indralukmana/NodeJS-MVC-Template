// import express library
const express = require('express')

// import for library used to validate user inputs
const expressValidator = require('express-validator')

// import path for working with directory and files
const path = require('path')

// import body parser for processing requests
const bodyParser = require('body-parser')

// import for cookie parsing library
const cookieParser = require('cookie-parser')

// import for session
const session = require('express-session')

// import for mongo storing session
const MongoStore = require('connect-mongo')(session)

// import mongoose for interfacing with mongodb
const mongoose = require('mongoose')

// import library for hanling logins
const passport = require('passport')

// create the Express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname), 'views') // the folder for template files
app.set('view engine', 'pug')

// serve static file in public folder
app.use(express.static(path.join(__dirname, 'public')))

// turns raw requests into req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Validator for validating user inputs
app.use(expressValidator())

// populate req.cookies from request
app.use(cookieParser())

// add session mechanism that allow the app to keep the data from visiitors and send flash messages
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport.js for handling logins
app.use(passport.initialize())
app.use(passport.session())
