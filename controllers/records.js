// Packages
const express = require('express')
const router = express.Router()
const moment = require('moment')

//Models
const Records = require('../models/records')
const Plans = require('../models/plans')

//RECORDS VIEW CONTROLLER
router.get('/', async (req, res, next) => {
  try {
    let record = await Records.find({})
    //console.log(record)
    res.render('records/list', { user: req.user, record })
  } catch (err) {
    next(err)
  }
})

//ONE RECORD VIEW CONTROLLER
router.get('/:id', async (req, res, next) => {
  try {
    let record = await Records.findById(req.params.id).populate('user')
    let allRecords = await Records.find({})
    console.log(allRecords)
    res.render('records/one', { user: req.user, record, allRecords})
  } catch (err) {
    next(err)
  }
})

//POST RECORDS CONTROLLER
router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('/auth/login')
    } else {
      req.body.user = req.user._id
      req.body.machine = 'machine x'
      let record = await Records.create(req.body)
      //console.log(record)
      res.redirect(`/records/${record._id}`)
    }
  } catch (err) {
    next(err)
  }
})

//DELETE PLAN 
router.delete('/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let deletedRecord = await Records.findByIdAndDelete(req.params.id)
      // console.log({ deletedRecord })
      res.redirect('/records')
    }
  } catch (err) {
    next(err)
  }
})



module.exports = router
