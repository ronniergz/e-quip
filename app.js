require('./api/data/dbconnection.js');
var express = require('express');
var app = express();
var path = require('path');
      
var routes = require('./api/routes');

// Define port to run on
app.set('port', 8080);

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Add routing
app.use(routes);

// Catch everything else and redirect to /index.html
app.get('*', (req, res) => {
    console.log("Routing");
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Now listening on port ' + app.get('port'));
});
