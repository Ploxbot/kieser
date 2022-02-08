// Packages
const express = require('express')
const router = express.Router()

//RECORDS VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('recordspage')
  res.send('recordspage')
})

//POST RECORDS CONTROLLER
router.get('/', (req, res) => {
  console.log('record posted')
  res.send('record posted')
})

module.exports = router
