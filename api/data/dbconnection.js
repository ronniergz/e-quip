var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/equip';
mongoose.connect(dburl);

// database has connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});

// database has been disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// database connection error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connected to ' + err);
});

// listen for process event CNTRL + C
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGINT)');
        process.exit(0);
    });
});

// listen for process event 
process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGTERM)');
        process.exit(0);
    });
});

// listen for process event 
process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Bring in schemas and models
require('./db.model.js');