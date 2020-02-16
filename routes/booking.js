const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();


router.get('/',(req,res,next)=>{
    Booking.find({},(err,booking)=>
    {
        if(err){
            res.json(next)
        }
        res.json(Booking)
    });
})

router.post('/book',(req,res,next)=>{
        Booking.create({
            personName:req.body.personName,
            movieName:req.body.movieName,
            Date:req.body.Date,
            Price:req.body.Price,
            Hall:req.body.Hall,
            Time:req.body.Time
    }).then((result)=>{
        res.json({message:"Movie booked successfully"});
    }).catch(next);
})

module.exports=router;
