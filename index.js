const express=require("express");
const mongoose=require("mongoose");
const morgan = require('morgan');
const user=require("./models/users")
const dotenv = require('dotenv').config();
const userRouter=require('./routes/users');
const uploadRouter=require('./routes/upload');
const movieRouter= require('./routes/movies');
const bookingRouter = require('./routes/booking');
const feedbackRouter = require('./routes/feedbacks')
const cors = require('cors')



const app=express();
app.use(express.json());
app.use(morgan("tiny"))
app.options('*', cors());
app.use(express.urlencoded({extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})
.then((db)=>{
    console.log("Sucessfully connected to MongoDB server");
},(err)=>console.log(err));



app.use('/users',userRouter);
app.use('/upload',uploadRouter);
app.use('/movies',movieRouter);
app.use('/booking',bookingRouter);
app.use('/feedbacks',feedbackRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT,() =>{
    console.log(`App is running at localhost:${process.env.PORT}`);
})

