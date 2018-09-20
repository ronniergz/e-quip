var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

// Create a new user
module.exports.register = function(req, res) {           
  console.log('POST new user');

  User
    .create({
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
      username: req.body.username
    }).exec(function(err, user) {
      console.log("made it to 201");
      console.log(req.body.username);
      if (err) {
        res.status(400).json(err);
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // 3 parameters: payload, secret, when token expires
          var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });  // assign JSON web token
          res.status(200).json({success: true, token: token});
          } else {
            res.status(401).json("Unauthorized");
            
          }
        }
    });
};

// Authenticator
module.exports.authenticate = function(req, res, next) {
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1]; // -> Authorization Bearer xxx
    jwt.verify(token, 's3cr3t', function(error, decoded) {
      if (error) {
        console.log(error);
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};

// Delete User