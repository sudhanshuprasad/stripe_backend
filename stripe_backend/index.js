require('dotenv').config();
const express = require("express");
const cors = require("cors")

const {v4: uuid} = require("uuid");

const payments = require("./routes/payments");

const app = express();

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get("/",(req,res)=>{
    res.send({data: "backend running"})
})

// app.use('/payments', require('./routes/payments'));
app.use('/payments', payments)

//listen
app.listen(process.env.PORT,()=>{console.log(`listening at post ${process.env.PORT}`)})