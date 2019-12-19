const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NODEMAILER_EMAIL_ADDRESS,
    pass: process.env.NODEMAILER_EMAIL_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  }
  
  else {
    console.log("The server is ready to accept messages.");
  }
});

module.exports = transporter;