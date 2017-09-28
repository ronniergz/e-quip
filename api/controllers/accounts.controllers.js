
module.exports.userLogin = function(req, res) {           
  console.log('GET the User Login Page');
  res
    .status(200)
    .send('<h2> Display the User Login Form </h2>');
};