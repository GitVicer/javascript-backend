const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    'username':{
        type:String,
        required:[true,"please add user"] 
    },
    'password':{
        type:String,
        required:[true,"please create a password"]
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema);