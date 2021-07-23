const Joi = require('@hapi/joi')


const Validation = (data) =>{
  const Schema = Joi.object({
    name: Joi.string().min(5).required(),
    regno: Joi.string().min(10).max(13).required(),
    dept: Joi.string().min(5).required(),
    tag: Joi.string().min(3).max(10).required(),
    domain: Joi.string().min(5).required(),
    mobile:Joi.string().min(10).max(13).required(),
    email:Joi.string().min(3).required().email()
  });

  return Schema.validate(data);
}

module.exports = Validation;