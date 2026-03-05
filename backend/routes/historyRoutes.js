import express from 'express'
import historyController from '../controllers/historyController.js'

const router = express.Router()

// Define the history endpoint and the handler
router.get('/{userID}', historyController.getHistory)

export default router