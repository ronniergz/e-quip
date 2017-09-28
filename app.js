require('./api/data/dbconnection.js');
var express = require('express');
var app = express();
var path = require('path');
      
var routes = require('./api/routes');

// Define port to run on
app.set('port', 8080);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));


// Add routing
app.use(routes);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Now listening on port ' + app.get('port'));
});
