import Transaction from '../models/Transaction.js'
import User from '../models/User.js'

const getHistory = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userID: req.user.id })
        if (transactions.length == 0) {
            return res.json({
                message: 'This user has no recorded transactions'
            })
        }
        res.json(transactions)
    } catch(error) {
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

export default {getHistory}