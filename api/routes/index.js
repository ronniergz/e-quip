var express = require('express');
var router = express.Router();

var ctrlItems = require('../controllers/items.controllers.js');
var ctrlAccounts = require('../controllers/accounts.controllers.js');

// Display all items
router
    .route('/items')
    .get(ctrlItems.itemsGetAll); 

// Display single item
router
    .route('/items/:id')
    .get(ctrlItems.itemsGetOne);
    
//  About Us
router
    .route('/about')
    .get(ctrlItems.itemsAbout); 

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
/*   
// Display user Login 
router
    .route('/account/login')
    .get(ctrlAccounts.userLogin);
*/    

module.exports = router;

