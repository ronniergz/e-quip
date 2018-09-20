var mongoose = require('mongoose');
var Item = mongoose.model('Item');



// Display all of the reviews
module.exports.reviewsGetAll = function(req, res) {           
  console.log('GET a specific items reviews');
  var id = req.params.id;    
  console.log("go get: " + id);    
  Item
    .findById(id)
    .select('reviews')
    .exec(function(err, items) {        
      console.log("Found 1 item");
      res
        .status(200)
        .json(items);
    });
    
};

// Add a review to a specific hotel

var _addReview = function (req, res, item) {
  // push review into model instance
  item.reviews.push({
    username : req.body.username,
    rating : parseInt(req.body.rating, 10),
    review : req.body.review
  });
  
  // save the parent document model instance: Mongoose '.save'
  item.save(function(err, itemUpdated) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        // last review in the array
        .json(itemUpdated.reviews[itemUpdated.reviews.length -1]);
    }
  }); 
  
};

module.exports.reviewsAddOne = function(req, res) {
  console.log('POST a new review');
  var id = req.params.id;    
  Item
      .findById(id)
      .select('reviews')
      .exec(function(err, doc) {
        var response = {
          status : 200,
          message : []
        };
        if (err) {
          console.log("Error finding hotel");
          response.status = 500;
          response.message = err;
        } else if (!doc) {
          console.log("Item id not found in database", id);
          response.status = 404;
          response.message = {
            "message" : "Item ID not found " + id
          };
          
        }
        if (doc) {
          _addReview(req, res, doc);
        } else {
          res 
            .status(response.status)
            .json(response.message);
        }
          
      });
      
};
