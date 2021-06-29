const express = require('express');
//author@HiT@Shiroya
const app = express();
const mongoose = require('mongoose');
const bodyparser=require('body-parser');

require('dotenv/config');

app.use(bodyparser.json());
const postRoute=require('./routes/post')


app.use('/post',postRoute);
app.get('/',(req,res)=>{
    res.send('we are on home');
})

// db conn
mongoose.connect(process.env.URl, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db!');
})

app.listen(4500, () => {
    console.log("listening");
})