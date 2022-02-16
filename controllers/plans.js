// Packages
const express = require('express')
const router = express.Router()

//Models
const Plans = require('../models/plans')
const Users = require('../models/users')


//PLANS VIEW CONTROLLER

router.get('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let user = await Users.findById(req.user._id)
      console.log(user)
      //req.query.user = req.user._id
      let plan = await Plans.find({user: req.user._id})
      //console.log(plan)
      res.render('plans/list', { user: req.user, user, plan })
    }
  } catch (err) {
    next(err)
  }
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
router.get('/:id', async (req, res, next) => {
  try {
    let plans = await Plans.findById(req.params.id).populate('user')
    res.render('plans/one', { user: req.user, plans })
  } catch (err) {
    next(err)
  }
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
    req.body.title = `Plan X`
    //console.log(req.body.length)
    let plan = await Plans.create(req.body)
    //console.log(plan)
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
