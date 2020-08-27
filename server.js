const mysql=require("mysql");
const express=require("express");
const bodyparser=require("body-parser");
//in a seperate file we are creating a connection "connection .js"
//importing it here to use it 
const mysqlconnection=require("./database_connection");
var http=require("http");
// importing the router file 
var peoplerouter=require("./routes/people");
var app = express();
app.use(bodyparser.json());
// redirecting the requests which are all made to 
// people should go to routs/people.js file 
// there we handle all the requests 
app.use("/people",peoplerouter);



http.createServer(app).listen(8000);