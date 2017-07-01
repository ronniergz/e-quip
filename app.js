var express = require('express');
var app = express();
var path = require('path');

var routes = require('./api/routes');

app.set('port', 3000);

// add a console log for any request on the server
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

// middleware for static files. "USE"
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// setting up the Express server
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});


