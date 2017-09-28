var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
        id : Number,
        type: {
            type : String,
            required: true
        },
        image: String,
        description : String,
        price : Number,
        color : String,
        availableColors : [String],
        specs : [String],
        stock : {
            type : Number,
            min : 1 
        }
});

// compile model from the schema
mongoose.model('Item', itemSchema, 'items');