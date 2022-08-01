const { response } = require("express");
var express = require("express");
var mongoose = require("mongoose");

//var customer = require("./customer");

var router = require('./routs/routs1');
require ("dotenv").config();

var app = express();
app.use(express.json());
app.use('/',router);



var port = 3000;
var URI = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(URI);

var connection = mongoose.connection;
connection.once("open" , ()=>{
    console.log("mongodb connected succesfully");
});        
       

    app.listen(port, () =>{
    console.log(`App is listeing at http://localhost:${port}`);
});
