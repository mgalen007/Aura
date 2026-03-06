import Transaction from '../models/Transaction.js'

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
        const transaction = await Transaction.find({ id: req.params.transactionID })
        if (transaction.userID != req.user.id) {
            return res.status(401).json({
                error: 'Not authorized'
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

const deleteTransaction = (req, res) => {
    try {
        
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