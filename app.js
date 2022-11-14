var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

//Get the default connection 
var db = mongoose.connection;

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function () {
  console.log("Connection to DB succeeded")
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/Movie');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var Movie = require("./models/Movie");
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Movie', movieRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter)

// We can seed the collection if needed on server start 
async function recreateDB() {
  // Delete everything 
  await Movie.deleteMany();

  let instance1 = new
    Movie({
      movieName:"RRR",movieType:"Adevnture",durMin:165
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new
    Movie({
      movieName:"majnu",movieType:"love story",durMin:146
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new
    Movie({
      movieName:"akanda",movieType:"action",durMin:215
    });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// for a specific Costume. 
exports.costume_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await Costume.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

module.exports = app;
