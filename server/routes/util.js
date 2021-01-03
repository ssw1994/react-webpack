const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.post("/sendMail", (req, res, next) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "waghmare.sachin1994@gmail.com",
      pass: "@saCHin1994@",
    },
  });

  // Specify what the email will look like
  const mailOpts = {
    from: req.body.email, // This is ignored by Gmail
    to: "waghmare.sachin1994@gmail.com",
    subject: `New message from contact form at ${req.body.fullname}`,
    text: req.body.message,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
      res.send("contact-failure"); // Show a page indicating failure
    } else {
      res.send("contact-success"); // Show a page indicating success
    }
  });
});

module.exports = router;
