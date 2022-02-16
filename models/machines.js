//IMPORTS
const mongoose = require('mongoose')

//MACHINES MODEL

module.exports = mongoose.model(
  'machines',
  {
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
    arms1: Number,
    arms2: String,
    lean1: Number,
    lean2: String,
    legs1: String,
    legs2n: Number,
    legs2s: String,
    heel: Number,
    spann: Number,
    ball: Number,
    pillow: String,
    range: [Number], //two values
    hole: Number,
    distance: Number,
    height: Number,
    pad: Number,
    handles1: Number,
    handles2: String,
    Start: Number,
    crank: Number,
    rom_r: Number,
    rom_l: Number,
    head: Number,
    tower: Number,
    belt: String,
    rope: String
  },
  {
    strict: false
  }
)
