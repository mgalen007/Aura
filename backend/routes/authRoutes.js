import express from 'express'
import authController from '../controllers/authController.js'
import authValidator from '../middleware/authValidator.js'

const router = express.Router()

// Define the auth endpoints, and their corresponding handlers
router.post('/login', authValidator('login'), authController.login)
router.post('/register', authValidator('register'), authController.register)
router.post('/logout', authController.logout)

export default router