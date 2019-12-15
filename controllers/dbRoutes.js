const express = require("express");

const router = express.Router();

const Work = require("../models/Work.js");

router.post("/api/work", function(req, res) {
  Work.create(req.body)
    .then(newWork => {
      res.json(newWork);
    })
    .catch(err => {
      res.json(err);
    });
});

//Route for Curation Data
router.get("/api/work", function(req, res) {
  Work.find({series: "curation"})
    .then(function(works) {
      res.json(works);
    }).catch(function(err) {
      res.json(err);
    });
});

//Route for finding by series
router.get("/api/work/:series", function(req, res) {
  Work.find({series: req.params.series})
    .then(works => {
      res.json(works);
    }).catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
