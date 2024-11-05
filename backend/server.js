require('dotenv').config()
let connectDB = require('./config/db.js')

const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/crud', require('./route/crudRoute'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
    connectDB()
})