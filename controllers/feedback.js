const { type, render } = require('express/lib/response');
var db = require('../db');

exports.feedback = (req,res)=>{
    const dept = req.body.dept;
    console.log(dept)
    db.query('SELECT * FROM feedback where dept =?',[dept],(error,results)=>{
        if(error){
            console.log(error)
        }else{
            console.log(results)
            res.render('feedback',{data:results})
        }
    })
  
}