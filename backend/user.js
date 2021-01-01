const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require("dotenv").config();
let User = mongoose.Schema({
    email: {
        type: String,
        unique:true
        
    },
    password: {
        type: String,
        
    },
    token:{
        type: String,
        
    }
    
   
});

User.statics.findByToken = function(token,cb){
    var user=this;
  
    jwt.verify(token,process.env.JWT_SECRET,function(err,decode){
        user.findOne({"_id": decode, "token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
  };
  
  //delete token
  
  User.methods.deleteToken = function(token,cb){
    var user=this;
  
    user.updateOne({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
  };
  
  User.methods.comparepassword=function(password,cb){
    bcrypt.compare(password,this.password,function(err,isMatch){
        if(err) return cb(next);
        cb(null,isMatch);
    });
}

// generate token

User.methods.generateToken=function(cb){
    var user =this;
    var token=jwt.sign(user._id.toHexString(),process.env.JWT_SECRET);

    user.token=token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}




module.exports = mongoose.model('users', User);