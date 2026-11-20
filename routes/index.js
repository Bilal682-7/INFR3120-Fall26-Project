// Landing page: shows the most recent workouts in a table
var express = require('express');
var router = express.Router();
var Workout = require('../models/Workout');

router.get('/', async function (req, res, next) {
  try {
    var workouts = await Workout.find().sort({ workoutDate: -1 }).limit(20);
    res.render('index', { title: 'LiftLog', workouts: workouts });
  } catch (err) {
    next(err);
  }
});

module.exports = router;