var express = require('express');
var router = express.Router();
var ctrlItems= require('../controllers/Items.controllers.js');

router
    .route('/items')
    .get(ctrlItems.ItemsGetAll);

module.exports = router;
