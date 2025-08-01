const cron = require('node-cron');
const mongoose = require('mongoose');
const Item = require('../models/Item');

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
    console.log('Recurring job started at', new Date().toISOString());

    // Connect if not already connected (optional)
    if (mongoose.connection.readyState === 0) {
      console.log('MongoDB not connected, connecting now...');
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connection established.');
    }

    const now = new Date();

    console.log(`Looking for recurring items due on or before ${now.toISOString()}...`);

    // Find all recurring items where nextDate is due or passed
    const dueItems = await Item.find({
      'recurring.isRecurring': true,
      'recurring.nextDate': { $lte: now },
    });

    console.log(`Found ${dueItems.length} items due for processing.`);

    if (dueItems.length === 0) {
      console.log('No items matched the criteria for this run.');
    }

    for (const item of dueItems) {
      console.log(`Processing item id: ${item._id}, name: "${item.name}"`);

      // Create new item copy for this cycle
      const newItem = new Item({
        name: item.name,
        category: item.category,
        amount: item.amount,
        recurring: item.recurring,
        user: item.user,
      });

      await newItem.save();
      console.log(`Created new recurring item with id: ${newItem._id}`);

      // Update nextDate on original item for the next cycle
      item.recurring.nextDate = addFrequency(item.recurring.nextDate, item.recurring.frequency);
      await item.save();
      console.log(`Updated original item nextDate to: ${item.recurring.nextDate.toISOString()}`);
    }

    console.log(`Recurring job finished at ${new Date().toISOString()}, processed ${dueItems.length} items.`);
  } catch (err) {
    console.error('Error processing recurring items:', err);
  }
}

// Schedule job to run every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Cron job triggered.');
  processRecurringItems();
});

module.exports = processRecurringItems;
