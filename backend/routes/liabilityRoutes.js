// ===========================
// backend/routes/liabilityRoutes.js
// ===========================
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all liabilities
router.get('/', async (req, res) => {
  try {
    const liabilities = await Item.find({ category: 'liability' });
    res.json(liabilities);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new liability
router.post('/', async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, category: 'liability' });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding liability:', err);
    res.status(400).json({ error: 'Bad request' });
  }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
