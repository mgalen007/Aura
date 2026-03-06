import Joi from 'joi'

const loginSchema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(8).required()
})

export default loginSchema