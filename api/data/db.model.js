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

var userSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        email : String,
        username : String,
        password : String,

});

// compile model from the schema
mongoose.model('Item', itemSchema, 'items');
mongoose.model('User', userSchema, 'users');

// add indexes for searching
itemSchema.index({ type: 'text', description: 'text', color: 'text', availableColors: 'text', specs: 'text'});