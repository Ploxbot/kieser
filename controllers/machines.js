// Packages
const express = require('express')
const router = express.Router()

//MACHINES VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('machinespage')
  res.render('machines/one')
})

module.exports = router
