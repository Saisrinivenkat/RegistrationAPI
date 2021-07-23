require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')

const register = require('./Route/register')


//DB
mongoose.connect(
  process.env.MONGODB_URI,
  {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true},
  ()=> console.log("Database Ready")
)

app.use(express.json())



app.use('/register',register);



app.listen(process.env.PORT || 3000,()=>console.log("Server Running"));
