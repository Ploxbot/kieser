// PACKAGES
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


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

//SIGNUP POST CONTROLLER
router.post('/signup', async (req, res, next) => {
  try {
    let existingUser = await Users.findOne({ email: req.body.email })
    if (existingUser) {
      throw new Error('User already exist!')
    } else {
      const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
      const insertResult = await Users.create({
        email: req.body.email,
        password: hashedPwd,
      });
      req.login(insertResult, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/plans')
        }
      })
      res.send(insertResult);
    }
  } catch (err) {
    next(err)
  }
})

//LOGIN POST CONTROLLER

router.post('/', async (req, res, next) => {
  try {
    let loginUser = await Users.findOne({
      email: req.body.email
    }) 
    if (loginUser) {
      const cmp = await bcrypt.compare(req.body.password, loginUser.password);
      if (cmp) {
      req.login(loginUser, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/plans')
        }
      })
     } else {
      throw new Error('Whrong email or password!')
     }
  }
  } catch (err) {
    next(err)
  }
})





module.exports = router
