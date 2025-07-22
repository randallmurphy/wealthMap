// const mongoose = require('mongoose');
// // const Asset = require('../../../models/Asset');
// // const Expense = require('../../../models/Expense');
// // const Income = require('../../../models/Income');
// // const Liability = require('../../../models/Liability');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     // expences:{
//     //     type: [mongoose.Schema.ObjectId],
//     //     ref: [Asset, Expense,Income,Liability]
//     // }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 50 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minLength: 6 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
