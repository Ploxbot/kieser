// Packages
const express = require('express')
const router = express.Router()
const moment = require('moment')

//Models
const Records = require('../models/records')

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
    let allRecords = await Records.find({user: record.user._id})
    res.render('records/one', { user: req.user, record, allRecords})
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
