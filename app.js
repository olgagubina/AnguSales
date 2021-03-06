var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api.js');

var app = express();

//???
// app.use(logger('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.get('/getCustomers', function(req, res, next) {
//   res.send('hello!');
// })

//Create HTTP server.
// const server = http.createServer(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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