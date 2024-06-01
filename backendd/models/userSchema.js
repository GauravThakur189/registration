const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Email is invalid')
        }
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    cpassword:{
        type:String,
        required:true,
        minLength:6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

const Userdb = new mongoose.model('User',userSchema);

module.exports = Userdb;