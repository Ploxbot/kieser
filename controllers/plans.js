// Packages
const express = require('express')
const router = express.Router()

//PLANS VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('planspage')
  res.send('planspage')
})

//ONE PLAN VIEW CONTROLLER
router.get('/:id', (req, res) => {
  console.log('one plan page')
  res.send('one plan page')
})

//EDIT PLAN VIEW CONTROLLER
router.get('/:id/edit', (req, res) => {
  console.log('update plan page')
  res.send('Update plan page')
})

//EDIT PLAN PATCH CONTROLLER
router.patch('/', (req, res) => {
  console.log('findAndModify a plan')
  res.send('findAndModify a plan')
})

//CREATE PLAN VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('creat plan page')
  res.send('creat plan page')
})

//CREAT PLAN POST CONTROLLER
router.post('/', (req, res) => {
  console.log('plan created')
  res.send('plan created')
})

//

module.exports = router
