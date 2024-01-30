const mongoose = require('mongoose');

const tirpSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
});

const Trip = mongoose.model('trips', tirpSchema);

module.exports = City;