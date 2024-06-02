const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('./db/conn');
const app = express();
const router = require('./routes/router')

app.use(express.json());
app.use(cors());
app.use(router);

// app.get('/',(req,res)=>{
//     res.send('hello world');
// })


app.listen(8000,(req,res)=>{
    console.log('server is running on port 8000');
})