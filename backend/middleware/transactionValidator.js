import transactionSchema from '../schemas/transactionSchema.js'
import mongoose from 'mongoose'

async function validateTransaction(req, res, next) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.transactionID) && req.method == 'GET') {
            return res.status(400).json({
                error: 'Invalid transaction ID'
            })
        }
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

