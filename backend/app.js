// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user/userRouter');
const itemRoutes = require('./routes/items/itemRoutes');

const app = express();

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Mount routes
app.use('/api/auth', userRouter);

app.use('/api/items', itemRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('💸 WealthMap API running strong...');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error', message: err.message });
});

module.exports = app;
