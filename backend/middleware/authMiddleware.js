import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET_KEY

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] // In the form Authorization: Bearer <token>
        if (!token) {
            return res.status(401).json(
                { error: 'No token provided' }
            )
        }
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

export default authMiddleware