// Workout model: defines what one workout record looks like in MongoDB
var mongoose = require('mongoose');

// Claude helped with initial coding 
var workoutSchema = new mongoose.Schema(
  {
    exercise: { type: String, required: true, trim: true },
    // category has to be one of these options
    category: {
      type: String,
      required: true,
      enum: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core', 'Cardio', 'Other']
    },
    // min 1 so you can't save a workout with 0 sets
    sets: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, min: 0, default: 0 }, // in kg
    workoutDate: { type: Date, required: true },
    notes: { type: String, trim: true, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);