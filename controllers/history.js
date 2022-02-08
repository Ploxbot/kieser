// Packages
const express = require('express')
const router = express.Router()

//HISTORY VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('historypage')
  res.send('Historypage')
})

module.exports = router
