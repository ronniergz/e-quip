//var itemData = require('../data/item-data.json');

module.exports.itemsAbout = function(req, res) {           
  console.log('GET the About Page');
  res
    .status(200)
    .send('<h2> Display the About Information </h2>');
};

module.exports.itemsGetNew = function(req, res) {           
  console.log('GET the new items');
  res
    .status(200)
    .send('<h2> Display All New Items </h2>');
};

module.exports.itemsGetPhones = function(req, res) {           
  console.log('GET the phones');
  res
    .status(200)
    .send('<h2> Display All Phones </h2>');
};

module.exports.itemsGetCases = function(req, res) {           
  console.log('GET the cases');
  res
    .status(200)
    .send('<h2> Display All Phone Cases </h2>');
};

module.exports.itemsGetCart = function(req, res) {           
  console.log('GET the current user\'s shopping cart');
  res
    .status(200)
    .send('<h2> Display The Current User\'s shopping cart </h2>');
};