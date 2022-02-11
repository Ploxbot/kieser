// PACKAGES
const express = require('express')
const router = express.Router()

//LOGIN VIEW CONTROLLER
router.get('/', (req, res) => {
  res.render('login')
})

//SIGNUP VIEW CONTROLLER
router.get('/signup', (req, res) => {
  res.render('signup')
})

//INFO VIEW CONTROLLER
router.get('/info', (req, res) => {
  res.render('info')
})

//LOGIN POST CONTROLLER
router.post('/', (req, res) => {
  console.log('loggedin')
  res.send('loggedin')
})

//SIGNUP POST CONTROLLER
router.post('/signup', (req, res) => {
  console.log('signedup')
  res.send('signedup')
})

module.exports = router
