const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    min: 6,
    max: 150,
  },
  regno:{
    type: String,
    required: true,
    min: 8,
    max: 20
  },
  dept:{
    type: String,
    required: true,
    min: 10,
    max: 150
  },
  tag:{
    type: String,
    required: true,
    min: 2,
    max: 8
  },
  domain:{
    type: String,
    required: true,
    min: 5,
    max: 150
  },
  mobile:{
    type: String,
    required: true,
    min: 8,
    max: 20,
    unique:true
  },
  email:{
    type: String,
    required: true,
    min: 5,
    max: 255,
    unique:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const Student = mongoose.model('student',StudentSchema)

module.exports = Student;