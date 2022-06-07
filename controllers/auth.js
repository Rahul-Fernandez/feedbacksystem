const { type } = require('express/lib/response');
var db = require('../db');


exports.register = (req,res)=>{
     const{name,email,dept,sub1,pun1,audi1,know1,clari1,lang1,sub2,pun2,audi2,know2,clari2,lang2,sub3,pun3,audi3,know3,clari3,lang3,sub4,pun4,audi4,know4,clari4,lang4,sub5,pun5,audi5,know5,clari5,lang5}=req.body;
     db.query('INSERT INTO feedback SET ?',
     {name:name,email:email,dept:dept,
        sub1:sub1,punctuality_1:pun1,audibility_1:audi1,subject_knowledge_1:know1,doubt_clarification_1:clari1,language_proficiency_1:lang1,
        sub2:sub2,punctuality_2:pun2,audibility_2:audi2,subject_knowledge_2:know2,doubt_clarification_2:clari2,language_proficiency_2:lang2,
        sub3:sub3,punctuality_3:pun3,audibility_3:audi3,subject_knowledge_3:know3,doubt_clarification_3:clari3,language_proficiency_3:lang3,
        sub4:sub4,punctuality_4:pun4,audibility_4:audi4,subject_knowledge_4:know4,doubt_clarification_4:clari4,language_proficiency_4:lang4,
        sub5:sub5,punctuality_5:pun5,audibility_5:audi5,subject_knowledge_5:know5,doubt_clarification_5:clari5,language_proficiency_5:lang5},
        (error,results)=>{
            if(error){
                console.log(error);
            }else{
                console.log(results);
                res.render('formsubmitted');
            }

        })
     
     
     
     
     
     
      

      
     
}