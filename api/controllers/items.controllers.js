var itemData = require('../data/item-data.json');

module.exports.itemsGetAll = function(req, res) {           
  console.log('GET the items');
  res
    .status(200)
    .json( itemData);
};