require("../models/connection");
const express = require("express");
const router = express.Router();
const moment = require("moment");

const Trip = require("../models/trips");

// Récupérer tous les voyages
router.get("/", (req, res) => {
    Trip.find().then(data => {
        res.json({ trips: data })
    });
});

router.post("/findTrips", (req, res) => {
    Trip.find().then((data) => {
        const tripsMatching = data.filter((trip) =>
            trip.departure === req.body.departure && 
            trip.arrival === req.body.arrival &&
            moment(trip.date).isSame(new Date(Number(req.body.date)), "day")
        );
        if (tripsMatching.length === 0) {
            res.json({ result: false, error: "No trips matching"});
        }
        res.json({ result: true, allTrips: tripsMatching });
    });
});


module.exports = router;