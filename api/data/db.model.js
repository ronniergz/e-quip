var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
        username : {
            type : String,
            required : true
        },
        rating : {
            type : Number,
            required : true,
            min : 0,
            max : 5
        },
        review : {
            type : String,
            required : true
        },
        createdOn : {
            type : Date,
            "default" : Date.now
        }
});

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
        },
        reviews: [reviewSchema]
});


var userSchema = new mongoose.Schema({
        username : {
            type: String,
            unique: true,
            required: true
        },
        email : {
            type: String,
            unique: true,
            required: true
        },
        password : {
            type: String,
            unique: true,
            required: true
        },
        roles : {
            type : String,
            enum: ['user', 'admin'],
            default : ['user']
            }
});

// compile model from the schema
mongoose.model('Item', itemSchema, 'items');
mongoose.model('User', userSchema, 'users');

// add indexes for searching
itemSchema.index({ type: 'text', description: 'text', color: 'text', availableColors: 'text', specs: 'text'});