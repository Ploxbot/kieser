//IMPORTS
const mongoose = require('mongoose')

//MACHINES MODEL

module.exports = mongoose.model('machines', {
  title: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    dafault: 0,
    required: true
  },
  note: String,
  seat: Number,
  lean: Number,
  feet: Number,
  armsN: Number,
  armsS: String,
  leanN: Number,
  leanS: String,
  legsN: Number,
  legsS: String,
  heel: Number,
  spann: Number,
  ball: Number,
  pillow: String,
  range: [Number],
  hole: Number,
  distance: Number,
  height: Number,
  pad: Number,
  handlesN: Number,
  handlesS: String,
  Start: Number,
  crank: Number,
  rom_r: Number,
  rom_l: Number,
  head: Number,
  tower: Number,
  belt: String,
  rope: String
})
