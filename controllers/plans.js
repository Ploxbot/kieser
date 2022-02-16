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
      //console.log(user)
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
router.get('/:id/edit', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let editedPlan = await Plans.findById(req.params.id).populate('user')
      //console.log('EDITED PLAN', editedPlan)
      res.render('plans/edit', { user: req.user, editedPlan })
    }
  } catch (err) {
    next(err)
  }
})

//CREAT PLAN POST CONTROLLER
router.post('/', async (req, res, next) => {
try {
  if (!req.isAuthenticated()) {
    res.render('login')
  } else {
    let allPlans = await Plans.find({user: req.user._id})
    let length = allPlans.length  
   //console.log('allplans', length)  
    req.body.title = "Plan " + length
    req.body.user = req.user._id
    let plan = await Plans.create(req.body)
    //console.log(plan)
    res.redirect(`/plans/${plan._id}`)
  }
} catch (err) {
  next(err)
}
})


//EDIT PLAN PATCH CONTROLLER
router.patch('/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let updatedPlan = await Plans.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      //console.log({ updatedPlan })
      res.redirect(`/plans/${updatedPlan._id}`)
    }
  } catch (err) {
    next(err)
  }
})

//DELETE PLAN 
router.delete('/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('/auth/login')
    } else {
      let deletedPlan = await Plans.findByIdAndDelete(req.params.id)

      // console.log({ deletedPlan })
      res.redirect('/plans')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
