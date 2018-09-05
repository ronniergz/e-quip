var mongoose = require('mongoose');
var User = mongoose.model('User');

// Create a new user
module.exports.userRegister = function(req, res) {           
  console.log('POST new user');

  User
    .create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      username: req.body.username,
      email : req.body.email,
      password : req.body.password
    }, function(err, user) {
      console.log("made it to 201");
      if (err) {
        res
        .status(400)
        .json(err);
      } else {
      res
        .status(201)
        .json(user);
      }
    });
};

// Verify existing user and log in

// Delete User