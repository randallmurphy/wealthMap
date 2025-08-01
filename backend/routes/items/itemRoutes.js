const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

const VALID_CATEGORIES = ['income', 'expense', 'asset', 'liability'];

// CREATE Item
router.post('/', async (req, res) => {
  try {
    const { name, amount, date, description, notes, category, user } = req.body;

    if (!category || !VALID_CATEGORIES.includes(category.toLowerCase())) {
      return res.status(400).json({ error: 'Invalid or missing category' });
    }

    const newItem = new Item({
      name,
      amount,
      date: date || new Date(),
      description,
      notes,
      category: category.toLowerCase(),
      user,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).json({ error: 'Server error adding item' });
  }
});

// READ: All Items Grouped by Category
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    const grouped = {
      income: [],
      expense: [],
      asset: [],
      liability: [],
    };

    items.forEach(item => {
      if (grouped[item.category]) {
        grouped[item.category].push(item);
      }
    });

    res.json(grouped);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// READ: Single Category
router.get('/:category', async (req, res) => {
  const { category } = req.params;

  if (!VALID_CATEGORIES.includes(category.toLowerCase())) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const items = await Item.find({ category: category.toLowerCase() });
    res.json(items);
  } catch (err) {
    console.error('Error fetching category items:', err);
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// UPDATE Item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE Item
router.delete('/:category/:id', async (req, res) => {
  const { category, id } = req.params;

  if (!VALID_CATEGORIES.includes(category.toLowerCase())) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const deleted = await Item.findOneAndDelete({ _id: id, category: category.toLowerCase() });
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: `${category} item deleted` });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
