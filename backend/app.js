const express = require('express');
const cors = require('cors');

const morgan = require('morgan');
require('dotenv').config();

const userRouter = require('./routes/user/userRouter');

const app = express();

// 🧠 Middlewares
             // Security headers
app.use(cors());                // Cross-origin access
app.use(express.json());        // Parse JSON
app.use(morgan('dev'));         // Logging

// 📦 Routes
app.use('/api/users', userRouter);

// 🔧 Default route
app.get('/', (req, res) => {
  res.send('💸 WealthMap API running strong...');
});

// 🛑 Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error', message: err.message });
});

module.exports = app;