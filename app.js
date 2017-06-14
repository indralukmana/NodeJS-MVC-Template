// express library import
const express = require('express')

// import path for working with directory and files
const path = require('path')

// import body parser for processing requests
const bodyParser = require('body-parser')

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
