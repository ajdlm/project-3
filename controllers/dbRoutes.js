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


router.post("/api/user", function (req, res){
  if (req.session.newPaint){
    req.session.myPaint.push(req.body);
  }
  else {
    req.session.newPaint = req.body;
    console.log("empty");
    console.log(req.session.newPaint);
  }
});

router.get("/api/cart", function(req, res) {
  console.log(req.session);
});


module.exports = router;
