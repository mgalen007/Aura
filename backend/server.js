import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/authRoutes.js'
import historyRouter from './routes/historyRoutes.js'
import tipsRouter from './routes/tipsRoutes.js'
import transactionsRouter from './routes/transactionsRoutes.js'

// Load environment variables
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.get('/health-check', (req, res) => {
    res.send({
        status: 'ok',
        message: 'API up and running'
    })
})

// Mount routes
app.use('/auth', authRouter)
app.use('/transactions', transactionsRouter)
app.use('/tips', tipsRouter)
app.use('/history', historyRouter)

// 404 handler middleware
app.use((req, res, next) => {
    res.status(404).json({
        error: "Resource not found"
    })
})


// Run the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))