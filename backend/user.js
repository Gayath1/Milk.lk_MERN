const mongoose = require('mongoose');
require("dotenv").config();
let User = mongoose.Schema({
    email: {
        type: String,
        unique: true
        
    },
    password: {
        type: String,
        
    },
    role: {
        type: String,
    },
    token:{
        type: String,
        
    }
    
   
}

);




module.exports = mongoose.model('users', User);