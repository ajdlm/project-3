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

router.post("/api/user", function(req, res) {
  //console.log("WOO", req.session);
  //req.session.views = req.session.views ? req.session.views++ : 1;
  if (req.session.newPaint) {
    req.session.newPaint.push(req.body);
    console.log(req.session.newPaint);
  }
  
  else {
    req.session.newPaint = [];
    req.session.newPaint.push(req.body);
    console.log("Empty");
    console.log(req.session.newPaint);
    //console.log(req.session.newPaint);
  }
  res.json();
});

router.get("/api/cart", function(req, res) {
  res.json(req.session.newPaint);
});

module.exports = router;
