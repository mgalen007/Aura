import express from 'express'
import transactionsController from '../controllers/transactionsController.js'
import transactionValidator from '../middleware/transactionValidator.js'

const router = express.Router()

// Define the transaction endpoints and the corresponding handlers
router.route('/')
    .get(transactionsController.getTransactionsByUser)
    .post(transactionValidator, transactionsController.createTransaction)

router.route('/:transactionID')
    .get(transactionsController.getTransactionById)
    .put(transactionValidator, transactionsController.updateTransaction)
    .delete(transactionsController.deleteTransaction)


export default router