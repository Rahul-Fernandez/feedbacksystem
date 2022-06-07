const express= require('express');
const router = express.Router();
const { type } = require('express/lib/response');
const admincontroller = require('../controllers/report')
const admincontroller2 = require('../controllers/class')
const admincontroller3 = require('../controllers/feedback')
var db = require('../db');

router.get('/',(req,res)=>{
    return res.render("admin");
})
router.get('/report',(req,res)=>{
    db.query('SELECT dept FROM departments',(error,results)=>{
        if(error){
            console.log(error);

        }
        if(results.length>0){
            console.log(results);
            //const depts=results;
           // const deptjson= JSON.stringify(depts);
            //console.log(deptjson);
            return res.render('reportclass',{data:results})
        }
    })
})

router.get('/classes',(req,res)=>{
    db.query('SELECT * FROM departments',(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length>0){
            console.log(results)
            res.render('classes',{data:results})
        }
    })
})
router.get('/feedback',(req,res)=>{
    db.query('SELECT dept FROM departments',(error,results)=>{
        if(error){
            console.log(error);

        }
        if(results.length>0){
            console.log(results);
            //const depts=results;
           // const deptjson= JSON.stringify(depts);
            //console.log(deptjson);
            return res.render('adminclass',{data:results})
        }
    })
})

router.get('/addclass',(req,res)=>{
    res.render('addclass')

})



router.post('/adminclass',admincontroller3.feedback)
router.post('/addclass',admincontroller2.addclass)
router.post('/reportclass',admincontroller.report )

module.exports = router;