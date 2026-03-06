import Transaction from '../models/User.js'
import transactionSchema from '../schemas/transactionSchema.js'
import mongoose from 'mongoose'

const getTransactionsByUser = async (req, res) => {

} 

const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.find({ id: req.params.transactionID })
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

const updateTransaction = () => null

const deleteTransaction = () => null


export default {
    getTransactionsByUser, getTransactionById,
    createTransaction, updateTransaction,
    deleteTransaction
}