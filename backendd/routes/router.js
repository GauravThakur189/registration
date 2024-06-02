 const express = require('express');
 const Userdb = require('../models/userSchema')
 const router  = express.Router();
 

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
    console.log(req.body);
 })

 module.exports = router;