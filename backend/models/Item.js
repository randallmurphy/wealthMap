const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, trim: true },
  notes: { type: String, trim: true },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['income', 'expense', 'asset', 'liability'],
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
