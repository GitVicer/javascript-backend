const {constants} = require("../constants")

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({message:err.message})
        case constants.SERVER_ERROR:
            res.json({message:err.message})
        default:
            console.log("all good");
    }
    res.json({message:err.message})
};

module.exports = errorHandler;