 const express=require("express");
 const router=express.Router();
 const mysqlconnection=require("../database_connection");


 router.get("/",function(req,res){
     mysqlconnection.query("select * from people",function (err,rows,fields){
         if (!err){
             res.json(rows);
         }
         else {
             res.write("unable to retirive a data");
             console.log("error in fething data and error is "+err);
         }
     });
 })

 //to handle if specific name is given
 // retriving a record for a specific name given 

 router.get("/:age",function(req,res){
     mysqlconnection.query("select * from people where age=?",[req.params.age],function (err,rows,fields){
         if(!err)
         {
             res.send(rows);
         }
         else{
             res.write("invalid name");
             console.log("invalid name nd error is:" +err);
         }
     });
 });

 // implementing the post method /inserting the data into database

router.post ("/",function (req,res){
    let data={name:req.body.name,age:req.body.age};
    let sql ="insert into people set ?";
    let query=mysqlconnection.query(sql,data,function(err,result){
        if (err){
            console.log("error in insertiion "+err);
        }
        else{
            res.send("successfuly inserted ");
            console.log("successfully inseted ");
        }
    });
});


//put method /updatating the data
router.put('/:age',(req, res) => {
    let sql = "UPDATE people SET name='"+req.body.name+"', age="+req.body.age+" WHERE age="+req.params.age;
    let query = mysqlconnection.query(sql, (err, results) => {
      if(err) throw err;
      res.send("successfully updted");
    });
  });

 module.exports=router;