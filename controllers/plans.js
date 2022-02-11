// Packages
const express = require('express')
const router = express.Router()

//PLANS VIEW CONTROLLER
router.get('/', (req, res) => {
  console.log('planspage')
  res.render('plans/list')
})

//CREATE PLAN VIEW CONTROLLER
router.get('/create', (req, res) => {
  console.log('creat plan page')
  res.render('plans/create')
})

//ONE PLAN VIEW CONTROLLER
router.get('/:id', (req, res) => {
  console.log('one plan page')
  res.render('plans/one')
})

//EDIT PLAN VIEW CONTROLLER
router.get('/:id/edit', (req, res) => {
  console.log('update plan page')
  res.render('plans/edit')
})

//CREAT PLAN POST CONTROLLER
router.post('/', (req, res) => {
  console.log('plan created')
  res.send('plan created')
})

//EDIT PLAN PATCH CONTROLLER
router.patch('/', (req, res) => {
  console.log('findAndModify a plan')
  res.send('findAndModify a plan')
})

//

module.exports = router
