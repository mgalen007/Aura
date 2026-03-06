import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction