var express = require('express');
var router = express.Router();

var ctrlItems = require('../controllers/items.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

// Display all items
router
    .route('/items')
    .get(ctrlItems.itemsGetAll); 

// Display single item
router
    .route('/items/:id')
    .get(ctrlItems.itemsGetOne);
    
// Display all items
router
    .route('/search')
    .get(ctrlItems.itemsGetQuery);

// Get review list and Add new reviews   
router
    .route('/items/:id/reviews')
    .get(ctrlReviews.reviewsGetAll)
    .post(ctrlReviews.reviewsAddOne);

// User Authentication
router
    .route('/users/register')
    .post(ctrlUsers.register);
router
    .route('/users/login')
    .post(ctrlUsers.login);
    
module.exports = router;

