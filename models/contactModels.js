const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    'name':{
        type:String,
        required:[true,"please add name"] 
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Contact",contactSchema);