import Transaction from '../models/User.js'

const getTransactionsByUser = (req, res) => {
    try{
        
    } catch(err) {
        res.status(500).json({
            error: 'An error occured, try again later'
        })
    }
} 

const getTransactionById = () => null

const createTransaction = () => null

const updateTransaction = () => null

const deleteTransaction = () => null


export default {
    getTransactionsByUser, getTransactionById,
    createTransaction, updateTransaction,
    deleteTransaction
}