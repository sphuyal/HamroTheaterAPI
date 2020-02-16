const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema(
    {

        personName:{
            type:String,
            required:true
        },
        movieName:{
            type:String,
            required:true
        },
        Date:{
            type:String,
            required:true
        },

        Price:{
            type:String,
            required:true
        },

        Hall:{
            type:String,
            required:true
        },

        Time:{
            type:String,
            required:true
        },
    });
    
    module.exports = mongoose.model('Booking', bookingSchema);