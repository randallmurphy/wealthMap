const express = require('express');
const router = express.Router();
const Item = require('./models/Item'); // adjust if needed

// POST: Add income
router.post('/income', async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, type: 'income' });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding income:', err);
    res.status(500).json({ error: 'Server error adding income' });
  }
});

// POST: Add expense
router.post('/expenses', async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, type: 'expense' });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding expense:', err);
    res.status(500).json({ error: 'Server error adding expense' });
  }
});

// POST: Add asset
router.post('/assets', async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, type: 'asset' });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding asset:', err);
    res.status(500).json({ error: 'Server error adding asset' });
  }
});

// POST: Add liability
router.post('/liabilities', async (req, res) => {
  try {
    const newItem = new Item({ ...req.body, type: 'liability' });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding liability:', err);
    res.status(500).json({ error: 'Server error adding liability' });
  }
});

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

module.exports = router;
