require("../models/connection");
const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");
const moment = require("moment");


// router.post("/addToCart", (req, res) => {
//     const myDate = req.body;
//     myDate = moment().format()
//     Cart.find({ date: myDate})
// })


router
  .post("/addToCart", (req, res) => {
    const newCart = new Cart({
        ispaid: false,
        trip: req.body.id
    });
    newCart.save().then(() => {  
        res.json({ cartList: newCart })
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



module.exports = router;
