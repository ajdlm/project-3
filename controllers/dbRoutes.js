const express = require("express");
const router = express.Router();
const Work = require("../models/Work.js");

//Route for Curation Data
router.get("/api/work", function(req, res) {
  Work.find({ series: "curation" })
    .then(function(works) {
      res.json(works);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Route for finding work by series
router.get("/api/work/:series", function(req, res) {
  Work.find({ series: req.params.series })
    .then(works => {
      res.json(works);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
