// Packages
const express = require('express')
const router = express.Router()

//MACHINES VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('machinespage')
  res.send('machinespage')
})

module.exports = router
