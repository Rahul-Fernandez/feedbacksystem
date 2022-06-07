const { type } = require('express/lib/response');
var db = require('../db');

exports.register = (req,res)=>{
     const{name,email,dept}=req.body;
     //console.log(req.body);
    
     db.query('SELECT email FROM feedback WHERE email=?', [email],(error,results)=>{
         if(error){
             console.log(error);
         }
         if(results.length>0){
             return res.render('student',{
                 message:'EMAIL ALREADY GIVEN FEEDBACK'
             });
         }
         db.query('SELECT * FROM departments where dept=?',[dept],(error,results)=>{
             if(error){
                 console.log(error);
             }else{
                 console.log(results);
                 return res.render('register',{name:name,email:email,dept:dept,subs:results});
             }
         }
         
         )
     })






      
     
}