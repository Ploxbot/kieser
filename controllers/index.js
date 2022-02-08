// PACKAGES
const express = require('express')
const router = express.Router()

//LOGIN VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('auth')
  res.send('login')
})

//SIGNUP VIEW CONTROLLER
router.get('/signup', (req, res) => {
  console.log('signup')
  res.send('signup')
})

//LOGIN POST CONTROLLER
post.get('/', (req, res) => {
  console.log('loggedin')
  res.send('loggedin')
})

//SIGNUP POST CONTROLLER
router.get('/signup', (req, res) => {
  console.log('signedup')
  res.send('signedup')
})

module.exports = router
