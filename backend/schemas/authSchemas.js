import Joi from 'joi'

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(5).required(),
    password: Joi.string().min(8).required()
})

export const loginSchema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(8).required()
})