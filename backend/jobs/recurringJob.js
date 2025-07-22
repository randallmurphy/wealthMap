const cron = require('node-cron');

const mongoose = require('mongoose');
const item = require('../models/item');

// Helper: Add interval based on frequency
function addFrequency(date, frequency) {
  const next = new Date(date);
  switch (frequency) {
    case 'daily':
      next.setDate(next.getDate() + 1);
      break;
    case 'weekly':
      next.setDate(next.getDate() + 7);
      break;
    case 'monthly':
      next.setMonth(next.getMonth() + 1);
      break;
    case 'yearly':
      next.setFullYear(next.getFullYear() + 1);
      break;
    default:
      next.setMonth(next.getMonth() + 1);
  }
  return next;
}

async function processRecurringItems() {
  try {
    // Connect if not already connected (optional)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    const now = new Date();

    // Find all recurring items where nextDate is due or passed
    const dueItems = await Item.find({
      'recurring.isRecurring': true,
      'recurring.nextDate': { $lte: now },
    });

    for (const item of dueItems) {
      // Create new item copy for this cycle
      const newItem = new Item({
        name: item.name,
        category: item.category,
        amount: item.amount,
        recurring: item.recurring,
        user: item.user,
      });

      await newItem.save();

      // Update nextDate on original item for the next cycle
      item.recurring.nextDate = addFrequency(item.recurring.nextDate, item.recurring.frequency);
      await item.save();
    }

    console.log(`Recurring job ran at ${now.toISOString()}, processed ${dueItems.length} items.`);
  } catch (err) {
    console.error('Error processing recurring items:', err);
  }
}

// Schedule job to run every day at midnight
cron.schedule('0 0 * * *', () => {
  processRecurringItems();
  // Or use an async wrapper if preferred
  // (async () => { await processRecurringItems(); })();
});

module.exports = processRecurringItems;
