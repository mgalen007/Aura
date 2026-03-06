import mongoose from 'mongoose'

async function connectDB(dbURI) {
    try {
        await mongoose.connect(dbURI)
        console.log('DB connected!')
    } catch(err) {
        console.error(err)
    }
}

export default connectDB