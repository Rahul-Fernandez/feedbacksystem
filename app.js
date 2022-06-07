
const express = require("express");
const app = express();
const mysql = require("mysql")
const path = require("path")
var db = require('./db');
app.set('view engine','hbs');

const publicDirectory= path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/Home.html'));
});

app.get('/student',(req,res)=>{
    db.query('SELECT dept FROM departments',(error,results)=>{
        if(error){
            console.log(error);

        }
        if(results.length>0){
            console.log(results);
            //const depts=results;
           // const deptjson= JSON.stringify(depts);
            //console.log(deptjson);
            return res.render('student',{data:results})
        }
    })
     
});
app.get('/addclass',(req,res)=>{
    res.send('<h1>outside admin</h1>')
})

app.use('/auth',require('./routes/auth'));
app.use('/admin',require('./routes/admin'));
app.listen(5000,()=>{
    console.log("Server started on Port 5000");
  })