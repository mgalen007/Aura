import express from 'express'
import getTips from '../controllers/tipsController.js'

const router = express.Router()

// Define the tips endpoint and its handler
router.get('/', getTips)

export default router