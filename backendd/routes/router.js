 const express = require('express');
 const Userdb = require('../models/userSchema')
 const router  = express.Router();
 const bcrypt = require('bcryptjs')
 const cookieParser = require('cookie-parser');
 const authenticate = require('../middlware/authenticate')

 

 router.post('/register',async(req,res)=>{
    const {username,email,password,cpassword} = req.body;
    if(!username || !email || !password || !cpassword){
        return res.status(422).json({error:"Please fill the fields properly."})
    }
    try{
        
        const userExist = await Userdb.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already exist."})
        }else if(password !== cpassword){
            return res.status(422).json({error:"Password are not matching."})
        }else{
        const finalUser = new Userdb(
            {
                username:username,
                email:email,
                password:password,
                cpassword:cpassword
            }

        )

        const storeData = await finalUser.save();
        res.status(201).json({status:201,storeData})


    //     user.save().then(
    //         (user)=>{
    //             res.status(201).json({message:"User Registered Successfully."})
    //             console.log("user registered succesfully"+user);
    //         }
    //     ).catch((error)=>{
    // console.log("failed to load"+error);
    //     })
    }
}
    catch(error){
        res.status(422).json({error})
        console.log("catch block error");
    }
 })


 //login api
 router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"fill all the details"})
    }

   try {
    
    const userValid =  await Userdb.findOne({email:email});

    if(userValid){
        const passwordMatch = await  bcrypt.compare(password,userValid.password)

        if(!passwordMatch){
            return res.status(422).json({error:"Invalid Passworddd"})
        }else{
            //token generation
            const token = await userValid.generateAuthToken();
            res.cookie('usercookie',token,{
                expires:new Date(Date.now()+900000),
                httpOnly:true,
                sameSite:'strict'
            })
            const result = {
               userValid,
               token

            }
            
            res.status(200).json({status:201,result})
        }
    }

   } catch (error) {
        res.status(422).json(error);
        console.log("error in login" + error);
   } 
 })

 router.get('/validuser',authenticate,async(req,res)=>{
    try {
        const validUserOne = await Userdb.findOne({_id:req.userId})
        res.status(201).json({status:201,validUserOne})
    } catch (error) {
        res.status(401).json({status:401,validUserOne})
    }
 })

 module.exports = router;