// Packages
const express = require('express')
const router = express.Router()

//Models
const Records = require('../models/records')

//RECORDS VIEW CONTROLLER
router.get('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let records = await Records.find({})
      //console.log(records)
      const getSameDate = (a) => {
        let onlyDate = new Set()
        a.forEach(element  => {
          onlyDate.add(element.date)

        });
        return onlyDate
      }
      let dates = getSameDate(records)
      //console.log(dates)
      
    let record = await Records.find({})
    //console.log(record)
    res.render('records/list', { user: req.user, record, dates})
  }
  } catch (err) {
    next(err)
  }
})

//ONE RECORD VIEW CONTROLLER
router.get('/:date', async (req, res, next) => {
  try {
    let record = await Records.find({date: req.params.date}).populate('user')
    let date = record[0].date
    res.render('records/one', { user: req.user, record, date})
  } catch (err) {
    next(err)
  }
})

//DELETE RECORD OF A DAY
router.delete('/:date', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let record = await Records.find({date: req.params.date}).populate('user')
      //console.log(record.user._id)
      let deletedRecord = await Records.findOneAndDelete({date: req.params.date})
      //console.log({ deletedRecord })
      res.redirect('/records')
    }
  } catch (err) {
    next(err)
  }
})

//DELETE SINGLE RECORD
router.delete('/:date/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('login')
    } else {
      let record = await Records.findById(req.params.id).populate('user')
      let deletedRecord = await Records.findByIdAndDelete(req.params.id)
      //console.log({ deletedRecord })
      res.redirect(`/records/${record.date}`)
    }
  } catch (err) {
    next(err)
  }
})



module.exports = router
