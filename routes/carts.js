require("../models/connection");
const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");
const moment = require("moment");

router
  .post("/addToCart", (req, res) => {

    const newCart = new Cart({
        ispaid: false,
        trip: req.body.id
    });
    newCart.save().then(() => {  
        res.json({result: true, cartList: newCart })
    });
  });



  router .get("/displayCart", (req, res) => {
    Cart.find({ ispaid: false })
        .populate("trip")
        .then((data) => {
            let trips = [];
            for (const cart of data) {
                trips.push(cart.trip);
            }
            res.json({ result: true, trips });
        })
  })

router.post("/addToCart", (req, res) => {
    const tripId = req.body.id;

    Trip.findById(tripId)
    .then(existingTrip => {
        if (! existingTrip) {
            return res.json({ result: false, error: "Trip not found" });
        }
        const newCart = new Cart({
            ispaid: false,
            trip: tripId
        });
        return newCart.save();
    })
    .then(savedCart => {
        res.json({ result: true, cartList: savedCart });
    })
});

module.exports = router;
