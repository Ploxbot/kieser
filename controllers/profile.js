// Packages
const express = require('express')
const router = express.Router()

//PROFILE VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('profile')
  res.render('profile')
})

//PROFILE UPDATE CONTROLLER
router.patch('/', (req, res) => {
  console.log('profile updated')
  res.send('profile updated')
})
module.exports = router
