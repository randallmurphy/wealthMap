const mongoose = require('mongoose');

const BudgetItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense', 'asset', 'liability'], required: true },
  label: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('BudgetItem', BudgetItemSchema);
