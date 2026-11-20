// Workout model: defines what one workout record looks like in MongoDB
var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema(
  {
    exercise: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core', 'Cardio', 'Other']
    },
    sets: { type: Number, required: true, min: 1 },
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, min: 0, default: 0 }, // in kg
    workoutDate: { type: Date, required: true },
    notes: { type: String, trim: true, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);