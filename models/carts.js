const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  ispaid: Boolean,
  trips: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
});

// const cartSchema = mongoose.Schema({
//     departure: String,
//     arrival: String,
//     date: Date,
//     price: Number,
//     idpaid: Boolean
// });

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
