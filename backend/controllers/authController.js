import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET_KEY

const login = async (req, res) => {
    try {
        const { username, password } = req.value
        const validUser = await User.findOne({ username })

        if (!validUser) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }
        const correctPassword = await bcrypt.compare(password, validUser.passwordHash)
        if (!correctPassword) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }
        const token = jwt.sign(
            { id: validUser._id, username: validUser.username, email: validUser.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        )
        res.json({ token })      
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

const register = async (req, res) => {
    try {
        const { email, username, password } = req.value
        const passwordHash = await bcrypt.hash(password, 14)
        await User.create({ email, username, passwordHash })
        res.status(201).json({
            message: 'User created successfully'
        })
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

const logout = () => null

export default { login, register, logout }