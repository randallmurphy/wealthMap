const express = require('express');
const router = express.Router();
const Income = require('../models/Income');

// Get all income items
router.get('/', async (req, res) => {
  try {
    const incomeItems = await Income.find();
    res.json(incomeItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add income item
router.post('/', async (req, res) => {
  try {
    const newItem = new Income(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Update income item
router.put('/:id', async (req, res) => {
  try {
    const updated = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// Delete income item
router.delete('/:id', async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;