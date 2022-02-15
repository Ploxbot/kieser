// Packages
const express = require('express')
const router = express.Router()

//MACHINES VIEW CONTROLLER
router.get('/:id', (req, res) => {
  console.log('machinespage')
  res.render('machines/one')
})

module.exports = router
