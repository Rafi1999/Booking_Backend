const bookings = require('../data/bookings');

// Fetch all bookings
const getBookings = (req, res) => {
  const { date } = req.query;

  if (date) {
    const filteredBookings = bookings.filter((booking) => booking.date === date);
    return res.status(200).json(filteredBookings);
  }

  res.status(200).json(bookings);
};

// Create a new booking
const createBooking = (req, res) => {
  const { date, time, guests, name, contact } = req.body;

  // Check if the slot is already booked
  const isSlotBooked = bookings.some(
    (booking) => booking.date === date && booking.time === time
  );

  if (isSlotBooked) {
    return res.status(400).json({ message: 'Slot is already booked!' });
  }

  // Add the new booking
  const newBooking = { date, time, guests, name, contact };
  bookings.push(newBooking);

  res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
};

// Delete a booking
const deleteBooking = (req, res) => {
  const { id } = req.params;

  const index = bookings.findIndex((booking, i) => i == id);

  if (index === -1) {
    return res.status(404).json({ message: 'Booking not found!' });
  }

  bookings.splice(index, 1);

  res.status(200).json({ message: 'Booking deleted successfully!' });
};

module.exports = { getBookings, createBooking, deleteBooking };
