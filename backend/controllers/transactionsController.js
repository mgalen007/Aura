import Transaction from '../models/Transaction.js'
import mongoose from 'mongoose'

const getTransactionsByUser = async (req, res) => {
    try {
        const userID = req.user.id
        const transactions = await Transaction.find({userID})
        if (transactions.length == 0) {
            return res.json({
                message: 'This user has no recorded transactions'
            })
        }
        res.json(transactions)
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
} 

const getTransactionById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.transactionID)) {
            return res.status(400).json({
                error: 'Invalid transaction ID'
            })
        }
        const transaction = await Transaction.findOne({ _id: req.params.transactionID })
        if (!transaction) {
            return res.status(404).json({
                error: 'Transaction not found'
            })
        }
        res.json(transaction)
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
} 

const createTransaction = async (req, res) => {
    try {
        req.value.userID = req.user.id
        const newTransaction = await Transaction.create(req.value)
        res.status(201).json(newTransaction)
    } catch(error) {
        if (error.isJoi) {
            return res.status(400).json({
                error: error.details[0].message
            })
        }
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

const updateTransaction = async (req, res) => {
    try {
        const updatedTransaction = req.value
        const oldTransaction = await Transaction.findOne({ _id: req.params.transactionID })
        if (!oldTransaction) {
            return res.status(404).json({
                error: 'Transaction not found'
            })
        }
        Object.keys(updatedTransaction).forEach(field => {
            oldTransaction[field] = updatedTransaction[field]
        })
        await oldTransaction.save()
        res.json(oldTransaction)
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findOneAndDelete({id: req.params.transactionID})
        if (!deletedTransaction) {
            res.status(404).json({
                error: 'Transaction not found'
            })
        }
        res.status(204).json({
            message: 'Transaction deleted successfully'
        })
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
} 


export default {
    getTransactionsByUser, getTransactionById,
    createTransaction, updateTransaction,
    deleteTransaction
}