// PACKAGES
const express = require('express')
const router = express.Router()

//Models
const Users = require('../models/users')

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
router.post('/signup', async (req, res, next) => {
  try {
    let existingUser = await Users.findOne({ email: req.body.email })
    if (existingUser) {
      throw new Error('User already exist!')
    } else {
      let user = await Users.create(req.body)
      //console.log({user})
      req.login(user, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
