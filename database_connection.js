const mysql=require("mysql");
// establishing a connection
var mysqlconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Nasik@12345",
    database:"node_restapi",
    multipleStatements:true
});
mysqlconnection.connect(function (err){
    if (err){
        console.log("connection failed"+err);
    }
    else{
        console.log("successfully conneced");
    }
});
module.exports=mysqlconnection;