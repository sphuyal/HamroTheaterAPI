const express = require('express');
const Feedback = require('../models/feedbacks');
const router = express.Router();



router.get('/',(req,res,next)=>{
    Feedback.find({},(err,feedbacks)=>
    {
        if(err){
            res.json(next)
        }
        res.json(feedbacks)
    });
})

router.post('/feed',(req,res,next)=>{
    Feedback.create({
        PersonName:req.body.PersonName,
        Topic:req.body.Topic,
        FeedBack:req.body.FeedBack
    }).then((result)=>{
        res.json({message:"feedback Posted"});
    }).catch(next);
})

module.exports=router;
