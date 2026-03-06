import mongoose from 'mongoose'

const tipSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Tip = mongoose.model('Tip', tipSchema)

export default Tip