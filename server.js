const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb  = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
console.log(process.env.PORT)
connectDb();

app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use('/api/users',require("./routes/userRoutes"));
app.use(errorHandler);

const server = app.listen(5001,function(){
    console.log("server running at",port);
});

