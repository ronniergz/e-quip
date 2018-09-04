var express = require('express');
var router = express.Router();

var ctrlItems = require('../controllers/items.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

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

// Create new user
router
    .route('/users/new')
    .post(ctrlUsers.userRegister);
    
module.exports = router;

