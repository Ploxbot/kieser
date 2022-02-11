// Packages
const express = require('express')
const router = express.Router()

//RECORDS VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('recordspage')
  res.render('records/list')
})
//ONE RECORD VIEW CONTROLLER
router.get('/:id', (req, res) => {
  console.log('recordspage')
  res.render('records/one')
})

//POST RECORDS CONTROLLER
router.get('/', (req, res) => {
  console.log('record posted')
  res.send('record posted')
})

module.exports = router
