const router = require('express').Router();

const Student = require('../models/students')
const Validate = require('../auth');



router.post('/', async (req,res)=>{
  
  const { name,regno,dept,tag,domain,mobile,email } = req.body;

  const { error } = Validate(req.body)
  
  if(error){
    return res.status(400).send({
      error: true,
      message: error.details[0].message
    })
  }

  const duplicates = await Student.find({
    $or: [
      { regno: regno },
      { email: email },
      { mobile: mobile }
    ]
  });

  if(duplicates.length != 0) {
    return res.status(400).send({ 
      error: true,
      message: `'Student' already registered( Hint : cannot register with same mail or mobile number for more than 1 student)`
    })}
  


  const student = new Student({
    name: name,
    regno: regno,
    dept: dept,
    tag:tag,
    domain:domain,
    mobile:mobile,
    email:email
  })

  try{
    const status = await student.save();
    res.send({ 
      student_Id: student._id,
      message: "Registration Successful"
    });
  }catch(error){
    res.status(500).send({
      error: true,
      message: "Internal Server Error"
    })
  }
})


module.exports = router;