const app = require('./app');  // <-- fixed relative path here
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const processRecurringItems = require('./jobs/recurringJob');

processRecurringItems();

mongoose.connect(MONGO_URI, {
    // options if any
})
.then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));



//// use npm run dev!;