// Packages
const express = require('express')
const router = express.Router()

//Models
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

module.exports = router
