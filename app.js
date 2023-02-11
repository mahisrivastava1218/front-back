const express=require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const app=express();
// dotenv.config({path: './config.env'})

mongoose.set('strictQuery', true);
const middleware=(req,res,next)=>{
    console.log('middleware')
    next();
}
const db="mongodb+srv://mahi1218:wj6zw24v4r@cluster0.ye73bni.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db,{
    useNewUrlParser: true
}).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log('error')
})
app.get('/',(req,res)=>{
    res.send('jppp')
})
app.get('/about',(req,res)=>{
    res.send('jppp')
})

app.get('/contact',middleware,(req,res)=>{
    console.log('contact')
    res.send('jppp')
})
app.get('/signin',(req,res)=>{
    res.send('jppp')
})
app.get('/signup',(req,res)=>{
    res.send('jppp')
})

app.listen(3000)