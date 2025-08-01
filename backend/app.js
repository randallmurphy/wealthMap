// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user/userRouter');
const itemRoutes = require('./routes/items/itemRoutes');
const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const assetRoutes = require('./routes/assetRoutes');
const liabilityRoutes = require('./routes/liabilityRoutes');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/auth', userRouter);
app.use('/api/items', itemRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/liabilities', liabilityRoutes);

app.get('/', (req, res) => {
  res.send('💸 WealthMap API running strong...');
});

module.exports = app;
