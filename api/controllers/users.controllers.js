var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');

// Create a new user
module.exports.register = function(req, res) {           
  console.log('POST new user');

  User
    .create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      username: req.body.username,
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    }, function(err, user) {
      console.log("made it to 201");
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(user);
      }
    });
};

// Verify and log in existing user
module.exports.login = function(req, res) {           
  
  User
    .findOne({
      email: req.body.email
    }, function(err, user) {
      console.log("made it to 201");
      if (err) {
        res.status(400).json(err);
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(201).json(user);
          } else {
            res.status(401).json("Unauthorized");
            
          }
        }
    });
}

// Delete User