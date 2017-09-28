var express = require('express');
var router = express.Router();

var ctrlItems = require('../controllers/items.controllers.js');
var ctrlAccounts = require('../controllers/accounts.controllers.js');

//  About Us
router
    .route('/about')
    .get(ctrlItems.itemsAbout); 

// Display new items
router
    .route('/new-items')
    .get(ctrlItems.itemsGetNew); 
    
// Display phones
router
    .route('/phones')
    .get(ctrlItems.itemsGetPhones);  

// Display cases
router
    .route('/cases')
    .get(ctrlItems.itemsGetCases); 

// Display shopping cart
router
    .route('/cart')
    .get(ctrlItems.itemsGetCart); 
    
// Display user Login 
router
    .route('/account/login')
    .get(ctrlAccounts.userLogin);
    

module.exports = router;

