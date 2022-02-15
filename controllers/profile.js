// Packages
const express = require('express')
const router = express.Router()

//Models
const Users = require('../models/users')


//PROFILE VIEW CONTROLLER
router.get('/', async (req, res, next) => {
try {
    //console.log('profile')
  if (!req.isAuthenticated()) {
    res.render('/login')
  } else {
    let user = await Users.findById(req.user._id)
    res.render('profile', { user: req.user, user })
  }
} catch (err) {
  next(err)
}
})

//PROFILE UPDATE CONTROLLER
router.patch('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('/auth/login')
    } else {
      let updatedUser = await Users.findByIdAndUpdate(req.user._id, req.body, {
        new: true
      })
      console.log({ updatedUser })
      req.login(updatedUser, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/profile')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
