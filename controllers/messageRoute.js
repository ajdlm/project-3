const express = require("express");
const router = express.Router();
const transporter = require("../models/nodemailerTransporter.js");

router.post("/send-message", (req, res, next) => {
  const outgoingMail = {
    from: req.body.name,
    to: "whocanbethemvp@gmail.com",
    subject: req.body.subject,
    text: `FROM: ${req.body.email}\n\nMESSAGE: ${req.body.message}`
  };

  transporter.sendMail(outgoingMail, (error, data) => {
    if (error) {
      res.json({
        message: "failure"
      });
    }

    else {
      res.json({
        message: "success"
      });
    }
  });
});

module.exports = router;