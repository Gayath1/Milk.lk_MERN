const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudProduct = new Schema({
    orders: [{
    product_name: {
        type: String
    },
    product_brand: {
        type: String
    },
    product_category: {
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
    }}],
    name: { type: String},
    address: { type: String},
    mobile: { type: String},
   
});

module.exports = mongoose.model('orders', crudProduct);