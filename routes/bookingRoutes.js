const express = require('express');
const { getBookings, createBooking, deleteBooking } = require('../controllers/bookingController');
const router = express.Router();

// Routes
router.get('/', getBookings);        // Get all bookings
router.post('/', createBooking);     // Create a new booking
router.delete('/:id', deleteBooking); // Delete a booking by ID

module.exports = router;
