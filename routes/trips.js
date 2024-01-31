require("../models/connection");
const express = require("express");
const router = express.Router();
const moment = require("moment");

const Trip = require("../models/trips");

// Récupérer tous les voyages
router.get("/", (req, res) => {
  Trip.find().then((data) => {
    res.json({ trips: data });
  });
});



router.post("/findTrips", (req, res) => {
    const today = moment();
    Trip.find({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: { $gte: today.toDate(),
                $lte: moment(today).endOf('day').toDate()}
    }).then((data) => {
        console.log(data);
        if (data.length === 0) {
            res.json({ result: false, error: "No trips matching"});
        } else {
            res.json({ result: true, allTrips: data });
        }
    });
});

module.exports = router;
