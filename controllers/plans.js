// Packages
const express = require('express')
const router = express.Router()

//Models
const Plans = require('../models/plans')
const Users = require('../models/users')


//PLANS VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('planspage')
  res.render('plans/list')
})

//CREATE PLAN VIEW CONTROLLER
router.get('/create', (req, res, next) => {
  try {
     //console.log('creat plan page')
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      res.render('plans/create', { user: req.user })
    }
  } catch (err) {
    next(err)
  }
})

//ONE PLAN VIEW CONTROLLER
router.get('/:id', (req, res) => {
  //console.log('one plan page')
  res.render('plans/one')
})

//EDIT PLAN VIEW CONTROLLER
router.get('/:id/edit', (req, res) => {
  console.log('update plan page')
  res.render('plans/edit')
})

//CREAT PLAN POST CONTROLLER
router.post('/', async (req, res, next) => {
try {
  if (!req.isAuthenticated()) {
    res.render('login')
  } else {
    req.body.user = req.user._id
    req.body.title = 'Plan X'
    console.log(req.body)
    let plan = await Plans.create(req.body)
    //console.log(house)
    res.redirect(`/plans/${plan._id}`)
  }
} catch (err) {
  next(err)
}
})


//EDIT PLAN PATCH CONTROLLER
router.patch('/', (req, res) => {
  console.log('findAndModify a plan')
  res.send('findAndModify a plan')
})

//

module.exports = router
