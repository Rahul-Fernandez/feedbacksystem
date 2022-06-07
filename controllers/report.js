const { type } = require('express/lib/response');
var db = require('../db');

exports.report = (req,res)=>{
     const dept = req.body.dept;
     db.query('SELECT COUNT(sub1) as count,SUM(punctuality_1) as pun1, SUM(audibility_1)as audi1, SUM(subject_knowledge_1) as know1, SUM(doubt_clarification_1) as clari1, SUM(language_proficiency_1) as lang1,SUM(punctuality_2) as pun2, SUM(audibility_2)as audi2, SUM(subject_knowledge_2) as know2, SUM(doubt_clarification_2) as clari2, SUM(language_proficiency_2) as lang2,SUM(punctuality_3) as pun3, SUM(audibility_3)as audi3, SUM(subject_knowledge_3) as know3, SUM(doubt_clarification_3) as clari3, SUM(language_proficiency_3) as lang3,SUM(punctuality_4) as pun4, SUM(audibility_4)as audi4, SUM(subject_knowledge_4) as know4, SUM(doubt_clarification_4) as clari4, SUM(language_proficiency_4) as lang4,SUM(punctuality_5) as pun5, SUM(audibility_5)as audi5, SUM(subject_knowledge_5) as know5, SUM(doubt_clarification_5) as clari5, SUM(language_proficiency_5) as lang5  FROM feedback where dept=?',[dept],
     (error,results)=>{
         if(error){
             console.log(results);
         }
         if(results.length>0){
            const deptjson= JSON.stringify(results);
            const obj = results[0];
            const score = (obj['count'])*5;
            const pun1 = (obj['pun1']/score)*100
            const audi1 = (obj['audi1']/score)*100
            const know1 = (obj['know1']/score)*100
            const clari1= (obj['clari1']/score)*100
            const lang1 = (obj['lang1']/score)*100
            const pun2 = (obj['pun2']/score)*100
            const audi2 = (obj['audi2']/score)*100
            const know2 = (obj['know2']/score)*100
            const clari2= (obj['clari2']/score)*100
            const lang2 = (obj['lang2']/score)*100
            const pun3= (obj['pun3']/score)*100
            const audi3 = (obj['audi3']/score)*100
            const know3 = (obj['know3']/score)*100
            const clari3= (obj['clari3']/score)*100
            const lang3 = (obj['lang3']/score)*100
            const pun4= (obj['pun4']/score)*100
            const audi4 = (obj['audi4']/score)*100
            const know4 = (obj['know4']/score)*100
            const clari4= (obj['clari4']/score)*100
            const lang4 = (obj['lang4']/score)*100
            const pun5= (obj['pun5']/score)*100
            const audi5 = (obj['audi5']/score)*100
            const know5= (obj['know5']/score)*100
            const clari5= (obj['clari5']/score)*100
            const lang5= (obj['lang5']/score)*100
            console.log(pun1,audi1,know1,clari1,lang1,pun2,pun3);
            db.query('SELECT * FROM departments WHERE dept =?',[dept],(error,results)=>{
                if(error){
                    console.log(error)
                }
                if(results.length>0){
                    arr = results[0];
                    const sub1 = arr['sub1'];
                    const sub2 = arr['sub2'];
                    const sub3 = arr['sub3'];
                    const sub4 = arr['sub4'];
                    const sub5 = arr['sub5'];
                    console.log(sub1,sub2,sub3,sub4,sub5)
                    return res.render('report',{sub1:sub1,sub2:sub2,sub3:sub3,sub4:sub4,sub5:sub5,
                        pun1:pun1,audi1:audi1,know1:know1,clari1:clari1,lang1:lang1,
                        pun2:pun2,audi2:audi2,know2:know2,clari2:clari2,lang2:lang2,
                        pun3:pun3,audi3:audi3,know3:know3,clari3:clari3,lang3:lang3,
                        pun4:pun4,audi4:audi4,know4:know4,clari4:clari4,lang4:lang4,
                        pun5:pun5,audi5:audi5,know5:know5,clari5:clari5,lang5:lang5
                    })

                }

            })

             
         }
     })






     
    
}