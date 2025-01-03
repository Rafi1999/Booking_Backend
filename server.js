const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Restaurant Booking API is running...');
});

// Export the app for Vercel
module.exports = app;
