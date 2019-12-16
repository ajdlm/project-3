const express = require("express");

const router = express.Router();

const Work = require("../models/Work.js");


//Route for Curation Data
router.get("/api/work", function(req, res) {
  Work.find({series: "curation"})
    .then(function(works) {
      res.json(works);
    }).catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
