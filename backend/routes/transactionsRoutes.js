import express from 'express'
import transactionsController from '../controllers/transactionsController.js'

const router = express.Router()

// Define the transaction endpoints and the corresponding handlers
router.route('/{userID}')
    .get(transactionsController.getTransactionsByUser)
    .post(transactionsController.createTransaction)

router.route('/{transactionID}')
    .get(transactionsController.getTransactionById)
    .put(transactionsController.updateTransaction)
    .delete(transactionsController.deleteTransaction)


export default router