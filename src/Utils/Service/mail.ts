import dotenv from "dotenv";
dotenv.config(); // load .env variables

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

let mailOptions = {
  from: process.env.EMAIL_ADDRESS,
  to: "dvaghasiya766@rku.ac.in",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

const { transporter, mailOptions } = require("./src/Utils/Service/mail");
transporter.sendMail(mailOptions, function (error: any, info: any) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// module.exports = { transporter, mailOptions };
