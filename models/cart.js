const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
});

const Cart = mongoose.model('trips', cartSchema);

module.exports = Cart;