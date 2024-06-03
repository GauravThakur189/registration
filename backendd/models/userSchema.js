const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const keySecret = "gauravsinghrajanashbfirbstrbdeif"


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



// Hashing the password using pre method of mongoose
userSchema.pre("save", async function(next) {
    // Use a regular function to properly bind `this`
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


  // token generation
  userSchema.methods.generateAuthToken = async function(){
    try {
        const token1 = jwt.sign({_id:this._id},keySecret,{
            expiresIn:'1d'
        })
        this.tokens = this.tokens.concat({token:token1});
        await this.save();
        return token1;
    } catch (error) {
        console.log("error in token" + error);
    }
  }


const Userdb = new mongoose.model('User',userSchema);

module.exports = Userdb;