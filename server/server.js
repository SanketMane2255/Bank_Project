const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/database')


dotenv.config();

connectDB()

const app = express()

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/transactions', transactionRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT , () => {
    console.log(`We are running at ${PORT}`)
})