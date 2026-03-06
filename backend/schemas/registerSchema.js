import Joi from 'joi'

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(4).required(),
    password: Joi.string().min(8).required()
})

export default registerSchema