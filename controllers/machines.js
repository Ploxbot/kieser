// Packages
const express = require('express')
const router = express.Router()

//Models
const Machines = require('../models/machines')

//MACHINES VIEW CONTROLLER
router.get('/:id', async (req, res, next) => {
  try {
    let machines = await Machines.find({})
    //console.log(machines)
    res.render('machines/one', { user: req.user, machines })
  } catch (err) {
    next(err)
  }
})

module.exports = router
