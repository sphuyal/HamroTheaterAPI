const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        admin: {
            type: Boolean,
            default: false
        }
    });
    
    module.exports = mongoose.model('User', userSchema);