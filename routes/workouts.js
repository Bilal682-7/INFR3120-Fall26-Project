// CRUD routes for workouts (mounted at /workouts in app.js)
var express = require('express');
var router = express.Router();
var Workout = require('../models/Workout');

// READ: list all workouts, newest first
router.get('/', async function (req, res, next) {
  try {
    var workouts = await Workout.find().sort({ workoutDate: -1 });
    res.render('workouts/list', { title: 'All Workouts', workouts: workouts });
  } catch (err) {
    next(err);
  }
});

// CREATE: show the form (must be above /:id so "new" isn't read as an id)
router.get('/new', function (req, res) {
  res.render('workouts/new', { title: 'Log a Workout', error: null, workout: {} });
});

// CREATE: save the form data
router.post('/', async function (req, res, next) {
  try {
    await Workout.create({
      exercise: req.body.exercise,
      category: req.body.category,
      sets: req.body.sets,
      reps: req.body.reps,
      weight: req.body.weight,
      workoutDate: req.body.workoutDate,
      notes: req.body.notes
    });
    res.redirect('/');
  } catch (err) {
    // Validation problem: show the form again with the message and what was typed
    if (err.name === 'ValidationError') {
      return res.status(400).render('workouts/new', {
        title: 'Log a Workout',
        error: err.message,
        workout: req.body
      });
    }
    next(err);
  }
});

// UPDATE: show the edit form
router.get('/:id/edit', async function (req, res, next) {
  try {
    var workout = await Workout.findById(req.params.id);
    if (!workout) return res.redirect('/workouts');
    res.render('workouts/edit', { title: 'Edit Workout', workout: workout, error: null });
  } catch (err) {
    next(err);
  }
});

// UPDATE: save changes (the form sends ?_method=PUT)
router.put('/:id', async function (req, res, next) {
  try {
    await Workout.findByIdAndUpdate(
      req.params.id,
      {
        exercise: req.body.exercise,
        category: req.body.category,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight,
        workoutDate: req.body.workoutDate,
        notes: req.body.notes
      },
      { runValidators: true }
    );
    res.redirect('/');
  } catch (err) {
    if (err.name === 'ValidationError') {
      var workout = Object.assign({}, req.body, { _id: req.params.id });
      return res.status(400).render('workouts/edit', {
        title: 'Edit Workout',
        workout: workout,
        error: err.message
      });
    }
    next(err);
  }
});

// DELETE (the form sends ?_method=DELETE)
router.delete('/:id', async function (req, res, next) {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;