var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// Display all the items
module.exports.itemsGetAll = function(req, res) {           
  console.log('GET all the items');
  console.log('Requested by: ' + req.user);
  Item
    .find()
    .exec(function(err, items) {
      console.log("Found items", items.length);
      res
        .status(200)
        .json(items);
    });
};


// Display one specific item
module.exports.itemsGetOne = function(req, res) {           
  console.log('GET a specific item');
  var id = req.params.id;    
  console.log("go get: " + id);    
  Item
    .findById(id)
    .exec(function(err, items) {        
      console.log("Found 1 item");
      res
        .status(200)
        .json(items);
    });
    
};

// Display items matching search criteria 
module.exports.itemsGetQuery = function(req, res) {           
  console.log('GET items via search');

  var query = req.query.q;

  Item
    .find( {$text : {$search : query}} )
    .exec(function(err, items) {
      console.log("Found items", items.length);
      res
        .status(200)
        .json(items);
    });
};




//-----------ADMIN ONLY---------------//

// Add item
// Edit item
// Remove item
