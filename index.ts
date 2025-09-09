import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const client = require("./src/DB/DBConnection");

const app: Express = express();
const PORT = process.env.PORT;

const initializeDBAndServer = async (): Promise<void> => {
  try {
    await client.connect();
    console.log("DB Connection Successfully...");

    app.listen(PORT, () => {
      console.log(`⚡ Server running at http://localhost:${PORT}/`);
    });
  } catch (e: any) {
    console.error(`DB Error: ${e.message}`);
  }
};

initializeDBAndServer();

// ✅ Example route
app.get("/", (req, res) => {
  res.sendFile("./src/Demo/index.html", { root: __dirname });
});

// const Migration = require("./src/Customs/Migration");
// Migration();

// const mailer = require("./src/Utils/Service/Mail");

// mailer.transporter.sendMail(
//   mailer.mailOptions,
//   function (error: any, info: any) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   }
// );
