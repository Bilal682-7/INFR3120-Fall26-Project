require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var methodOverride = require('method-override');     // NEW

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var workoutsRouter = require('./routes/workouts');   // NEW

var app = express();

// Connect to MongoDB Atlas using the connection string from .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(function () {
    console.log('Connected to MongoDB');
  })
  .catch(function (err) {
    console.error('MongoDB connection error:', err.message);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Lets HTML forms send PUT and DELETE using ?_method=PUT / ?_method=DELETE   // NEW
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/workouts', workoutsRouter);                // NEW

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;