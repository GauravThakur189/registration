const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('./db/conn');
const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world');
})


app.listen(8000,(req,res)=>{
    console.log('server is running on port 8000');
})