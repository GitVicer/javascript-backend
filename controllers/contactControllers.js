const asyncHandler = require("express-async-handler"); 
const Contact = require("../models/contactModels");
const getContact = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.send(contacts);
})

const createContact = asyncHandler(async(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact = await Contact.create({
        name
    })
    res.send(contact);
});

module.exports = {getContact,createContact};