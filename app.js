var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Groups = require('./models/groups.js').Groups;
var Timetable = require('./models/timetable.js').Timetable;
var Subjects = require('./models/subjects.js').Subjects;


var routes = require('./routes/index');

var app = express();

app.get('/groups/:dep',function(req,res,next){
  Groups.find({department:req.params.dep},function(err,groups){
    if(err) return next(err);
    res.json(groups);
  })
})

app.get('/:groups&:day&:days&:weektype',function(req,res,next){
   var days=[];
   var day = req.params.day;
   var cdays = req.params.days;
  for(var i=0;i<cdays;i++){
   if(day<=7){
    days[i]=day;
    day++;
  }
  else
  {
    day=1;
    days[i]=day;
    day++;
  }
  }
  Timetable.find({name:req.params.groups,day:{$in:days},weektype:req.params.weektype},function(err,timetable){
    if(err) return next(err);
    res.json(timetable)
})
  
})

app.get('/subjects',function(req,res,next){
  Subjects.find({},function(err,subjects){
    res.json(subjects);
  })
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.get('/json',function(req,res,next){
  res.render('json',{})
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
