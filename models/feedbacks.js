const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema(
    {
        PersonName:{
            type:String,
            required:true
        },
        Topic:{
            type:String,
            required:true
        },
        FeedBack:{
            type:String,
            required:true
        }
    });
    
    module.exports = mongoose.model('Feedback', feedbackSchema);