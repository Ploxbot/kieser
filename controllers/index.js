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

router.post('/', async (req, res, next) => {
  try {
    let loginUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    //console.log(loginUser)
    if (loginUser) {
      req.login(loginUser, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/profile')
        }
      })
    } else {
      throw new Error('Whrong email or password!')
    }
  } catch (err) {
    next(err)
  }
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
