const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('MVC Template')
})

module.exports = router
