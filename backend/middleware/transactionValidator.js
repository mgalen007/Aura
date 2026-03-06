import transactionSchema from '../schemas/transactionSchema.js'

async function validateTransaction(req, res, next) {
    try {
        if (!req.body) {
            res.status(400).json({
                error: 'Invalid transaction'
            })
        }
        const value = await transactionSchema.validateAsync(req.body, { stripUnknown: true })
        req.value = value
        next()
    } catch(error) {
        if (error.isJoi) {
            return res.status(400).json({
                error: error.details[0].message
            })
        }
        console.error(error)
        res.status(500).json({
            error: 'An error occured, try again later'
        })
    }
}

export default validateTransaction

