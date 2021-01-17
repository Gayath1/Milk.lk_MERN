const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudProduct = new Schema({
    product_name: {
        type: String
    },
    product_brand: {
        type: String
    },
    product_category: {
        type: String
    },
    image: { 
        type: String
    },
    token: { 
        type: String
    },
    
    product_price: {
        type: String
    },
    quantity: {
        type: String
    },
   
});

module.exports = mongoose.model('cart', crudProduct);