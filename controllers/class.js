const { type } = require('express/lib/response');
var db = require('../db');

exports.addclass = (req,res)=>{
    const {name,sub1,sub2,sub3,sub4,sub5} = req.body;
    console.log(req.body)
    db.query('SELECT dept FROM departments where dept =?',[name],(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length>0){
            return res.render('addclass',{
                message:'CLASS ALREADY PRESENT'
            });
        }
         db.query('INSERT INTO departments SET ?',{dept:name,sub1:sub1,sub2:sub2,sub3:sub3,sub4:sub4,sub5:sub5},(error,results)=>{
             if(error){
                 console.log(error);
             }else{
                 console.log(results);
                 res.render('classsubmitted')
             }
         });
    });
    
}