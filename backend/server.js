import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

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

app.listen(PORT, () => console.log(`Listening on ${PORT}...`))