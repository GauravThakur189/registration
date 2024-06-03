const jwt = require('jsonwebtoken');
const Userdb = require('../models/userSchema');
const keySecret = "gauravsinghrajanashbfirbstrbdeif"

const authenticate = async (req,res,next)=>{
    try {
        const token = req.headers.authorization;

       const verifyUser = jwt.verify(token,keySecret);

       const rootuser = await Userdb.findOne({_id:verifyUser._id})
       if(!rootuser){throw new Error("User Not Found")};

       req.token = token;
       req.rootuser = rootuser;
       req.userId = rootuser._id;
       next();
    } catch (error) {
        res.status(401).json({status:401,message:"Unatuhorized no token provided"})
    }
}

module.exports = authenticate