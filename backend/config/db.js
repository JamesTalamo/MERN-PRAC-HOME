let mongoose = require('mongoose')

const connectDB = async () => {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to mongodb')

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB