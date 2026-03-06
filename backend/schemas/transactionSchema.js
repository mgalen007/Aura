import Joi from 'joi'

const transactionSchema = Joi.object({
    type: Joi.string().valid('income', 'expense').required(),
    amount: Joi.number().required(),
    category: Joi.string().required().min(4)
})

export default transactionSchema