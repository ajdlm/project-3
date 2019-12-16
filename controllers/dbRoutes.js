const express = require("express");

const router = express.Router();

const Work = require("../models/Work.js");

<<<<<<< HEAD
=======

>>>>>>> 964d43ffa7304c90444fc5e88e3e0d349db12344
//Route for Curation Data
router.get("/api/work", function(req, res) {
  Work.find({series: curation})
    .then(function(works) {
      res.json(works);
    }).catch(function(err) {
      res.json(err);
    });
});

<<<<<<< HEAD
//Route for Painting Data
router.get("/api/paint", function(req, res) {
  Work.find({isPaint: true})
    .then(function(works) {
      res.json(works);
    }).catch(function(err) {
    res.json(err);
  });
});
=======
//Route for finding by series
router.get("/api/work/:series", function(req, res) {
  Work.find({series: req.params.series})
    .then(works => {
      res.json(works);
    }).catch(function(err) {
      res.json(err);
    });
});

>>>>>>> 964d43ffa7304c90444fc5e88e3e0d349db12344
module.exports = router;
