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

module.exports = router;
