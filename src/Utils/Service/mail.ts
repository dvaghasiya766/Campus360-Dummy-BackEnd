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
  to: "mvekariya892@rku.ac.in",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{{app_name}} — Verification Code</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    /* Basic, widely supported inline-friendly styles */
    body { margin:0; padding:0; background:#f2f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
    .container { width:100%; max-width:600px; margin:32px auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(90deg,#4f46e5,#06b6d4); color:#fff; padding:20px; text-align:center; }
    .header h1 { margin:0; font-size:20px; letter-spacing:0.2px; }
    .content { padding:28px 24px; color:#111827; line-height:1.5; }
    .greeting { font-size:16px; margin-bottom:12px; }
    .otp-box { display:block; margin:20px auto; text-align:center; }
    .otp { display:inline-block; padding:18px 28px; font-size:28px; font-weight:700; letter-spacing:6px; background:#f8fafc; border:1px solid #e6edf3; border-radius:8px; color:#0f172a; }
    .note { font-size:13px; color:#6b7280; margin-top:8px; }
    .btn { display:inline-block; margin-top:18px; background:#111827; color:#fff; text-decoration:none; padding:12px 20px; border-radius:6px; font-weight:600; }
    .footer { padding:18px 24px; font-size:13px; color:#6b7280; background:#fbfdff; text-align:center; }
    .muted { color:#9ca3af; font-size:12px; }
    .small { font-size:12px; color:#6b7280; margin-top:10px; }
    @media (max-width:420px) {
      .otp { font-size:22px; padding:14px 18px; letter-spacing:4px; }
      .header h1 { font-size:18px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>{{app_name}} — Verify your email</h1>
    </div>

    <div class="content">
      <p class="greeting">Hi {{name}},</p>

      <p>Thanks for registering with <strong>{{app_name}}</strong>. Use the verification code below to confirm your email address. This code will expire in <strong>{{expiry}}</strong>.</p>

      <div class="otp-box" role="region" aria-label="One time password">
        <span class="otp" aria-hidden="true">{{otp}}</span>
        <div class="note">Enter this code in the app to verify your account</div>
      </div>

      <p class="small">If you didn't request this code, you can safely ignore this email — someone may have entered your address by mistake.</p>

      <p style="margin-top:18px;">
        <a href="#" class="btn" onclick="return false;">Open {{app_name}}</a>
      </p>

      <p class="muted" style="margin-top:18px;">
        Need help? Contact <a href="mailto:{{support_email}}">{{support_email}}</a>.
      </p>
    </div>

    <div class="footer">
      <div>© {{year}} {{app_name}}. All rights reserved.</div>
    </div>
  </div>
</body>
</html>
`,
};

module.exports = { transporter, mailOptions };
