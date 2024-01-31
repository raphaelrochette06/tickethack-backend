const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  ispaid: Boolean,
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
});


const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;

// const cartSchema = mongoose.Schema({
//     departure: String,
//     arrival: String,
//     date: Date,
//     price: Number,
//     idpaid: Boolean
// });