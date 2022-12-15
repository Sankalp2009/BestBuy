const mongoose = require('mongoose');
//2. Creating Schema or Structure of Data
const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'A product name must be provided'],
    },
    image : [String],
    rating : String,
    price : {
        type : Number,
        required : [true, 'A Product Must Have Price'],
    },
});

//Assigning Schema or Structure to Model
exports.Product = mongoose.model('Product', ProductSchema);