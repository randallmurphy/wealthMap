const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const VALID = ['income','expense','asset','liability'];

// CREATE
router.post('/', async (req, res) => {
  try {
    const { name, amount, date, description, notes, category, user } = req.body;
    if (!category || !VALID.includes(category)) return res.status(400).json({ error: 'Invalid category' });
    const saved = await new Item({ name, amount, date, description, notes, category, user }).save();
    res.status(201).json(saved);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error adding item' });
  }
});

// READ ALL grouped
router.get('/', async (_, res) => {
  try {
    const items = await Item.find();
    const grouped = VALID.reduce((acc, cat) => ({ ...acc, [cat]: [] }), {});
    items.forEach(i => grouped[i.category]?.push(i));
    res.json(grouped);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE
router.delete('/:category/:id', async (req, res) => {
  const { category, id } = req.params;
  if (!VALID.includes(category)) return res.status(400).json({ error: 'Bad category' });
  try {
    const deleted = await Item.findOneAndDelete({ _id: id, category });
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: `${category} item deleted` });
  } catch (e) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
