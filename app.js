require("module-alias/register");
const createError = require('http-errors');
const { json } = require("express");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

// Dosen
const dosenRouter = require('./routes/dosen');
// Admin
const adminRouter = require('./routes/admin');
// Mahasiswa
const mahasiswaRouter = require('./routes/mahasiswa');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Dosen
app.use('/dosen', dosenRouter);
// Admin
app.use('/admin', adminRouter);
// Mahasiswa
app.use('/mahasiswa', mahasiswaRouter);

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
