// Packages
const express = require('express')
const router = express.Router()


//Models
const Records = require('../models/records')
const Machines = require('../models/machines')

//MACHINES VIEW CONTROLLER
router.get('/:title', async (req, res, next) => {
  try {
    let machines = await Machines.findOne({title: req.params.title})
    res.render('machines/one', { user: req.user, machines })
  } catch (err) {
    next(err)
  }
})

//POST RECORDS CONTROLLER
router.post('/:title', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.render('/auth/login')
    } else {
      req.body.user = req.user._id
      let machines = await Machines.findOne({title: req.params.title})
      req.body.machine = machines.title
      let record = await Records.create(req.body)
      //console.log(record)
      res.redirect(`/records/${record.date}`)
    }
  } catch (err) {
    next(err)
  }
})



module.exports = router
