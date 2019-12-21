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

router.put("/api/cart", (req, res) => {
  console.log(req.body);

  if (req.session.newPaint) {
    for (let i = 0; i < req.session.newPaint.length; i++) {
      if (req.body._id === req.session.newPaint[i]._id) {
        req.session.newPaint.splice(i, 1);

        break;
      }
    }
  }

  res.json(true);
});

router.put("/api/total", (req, res) => {
  req.session.total = req.body.total;
  console.log(req.session.total);
  res.json(req.session.total);
});

router.get("/api/total", (req, res) => {
  res.json(req.session.total);
})
module.exports = router;
