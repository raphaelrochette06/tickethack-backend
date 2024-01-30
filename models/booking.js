const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
});

const Booking = mongoose.model('trips', bookingSchema);

module.exports = Booking;