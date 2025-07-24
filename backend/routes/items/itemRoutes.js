const express = require('express');
const Item = require('../../models/item'); // uppercase I here
const router = express.Router();

// POST: Add new item (income, expense, asset, liability)
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).json({ error: 'Server error adding item' });
  }
});

// GET: Get all items
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
