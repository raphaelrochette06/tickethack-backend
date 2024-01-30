var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// // Récupérer tous les voyages
// router.get("/trips", (req, res) => {
//   Trip.find().then(data => {
//       res.json({ Alltrips: data })
//   })
// })

module.exports = router;
