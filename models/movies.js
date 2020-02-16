const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema(
    {
        movieName:{
            type:String,
            required:true
        },
        movieDetail:{
            type:String,
            required:true
        },
        image: {
            type: String
        }
    });
    
    module.exports = mongoose.model('Movie', movieSchema);