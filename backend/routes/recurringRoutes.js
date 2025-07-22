const express = require('express');
const router = express.Router();
const RecurringItem = require('../models/RecurringItem');
const BudgetItem = require('../models/BudgetItem');
const authMiddleware = require('../middleware/authMiddleware');

// Auto-trigger recurring on dashboard load
router.get('/trigger', authMiddleware, async (req, res) => {
  try {
    const items = await RecurringItem.find({ user: req.user.id });
    const now = new Date();

    for (const item of items) {
      const last = new Date(item.lastRun || 0);
      const next = new Date(last);
      next.setMonth(last.getMonth() + 1);

      if (now >= next) {
        await BudgetItem.create({ ...item.toObject(), date: now, isRecurring: true });
        item.lastRun = now;
        await item.save();
      }
    }

    res.json({ msg: 'Recurring items triggered' });
  } catch (err) {
    res.status(500).json({ msg: 'Error triggering recurring items' });
  }
});

module.exports = router;
