const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth'); // Protect routes
const Item = require('../models/item'); // Capitalized to match model name

//  GET all items for logged-in user, with optional filters
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { category, recurring } = req.query;
    const filter = { user: req.user.id };

    if (category) filter.category = category;
    if (recurring) filter['recurring.isRecurring'] = recurring === 'true';

    const items = await Item.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ message: 'Server error fetching items' });
  }
});

//  POST: Add new item
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, category, amount, recurring } = req.body;

    if (!name || !category || typeof amount !== 'number') {
      return res.status(400).json({ message: 'Name, category, and valid amount are required' });
    }

    const newItem = new Item({
      name,
      category,
      amount,
      recurring,
      user: req.user.id,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Create error:', err);
    res.status(400).json({ message: 'Error creating item' });
  }
});

//  PUT: Update item by ID
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id, user: req.user.id });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    const { name, category, amount, recurring } = req.body;

    if (amount && typeof amount !== 'number') {
      return res.status(400).json({ message: 'Amount must be a number' });
    }

    item.name = name ?? item.name;
    item.category = category ?? item.category;
    item.amount = amount ?? item.amount;
    item.recurring = recurring ?? item.recurring;

    const updated = await item.save();
    res.json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(400).json({ message: 'Error updating item' });
  }
});

//  DELETE: Remove item
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await Item.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;
