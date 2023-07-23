const asyncHandler = require("express-async-handler"); 
const Contact = require("../models/contactModels");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("all field s are mandatory");
    }
    const userAvailable = await User.findOne({username});
    if (userAvailable){
        res.status(400);
        throw new Error("username already registered")
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        password:hashedPassword
    });
    console.log("user created successfullly")
    if (user){
        res.status(201).json({_id:user.id,"username":user.username})
    }
    else{
        res.status(400);
        throw new Error("not created, data invalid or copy")
    }
    res.json({message:"register user"})

});

const login = asyncHandler(async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("all details necessary");
    }
    const user = await User.findOne({username});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                id:user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"})
        res.status(200).json({accessToken})
    }
    else{
        res.status(401);
        throw new Error("incorrect credentials")
    }
});

const currentUser = asyncHandler(async(req,res)=>{
    res.json("Current user ")
});

module.exports = {registerUser, login, currentUser};