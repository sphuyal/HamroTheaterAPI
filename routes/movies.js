const express = require('express');
const Movie = require('../models/movies');
const router = express.Router();



router.get('/',(req,res,next)=>{
    Movie.find({},(err,movies)=>
    {
        if(err){
            res.json(next)
        }
        res.json(movies)
    });
})

router.post('/',(req,res,next)=>{
    Movie.create({
        movieName:req.body.movieName,
        movieDetail:req.body.movieDetail,
        image:req.body.image
    }).then((result)=>{
        res.json({message:"Movie Added successfully"});
    }).catch(next);
})

module.exports=router;
