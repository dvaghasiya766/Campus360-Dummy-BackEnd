import express, { Express } from "express";
import { MongoClient, Db } from "mongodb";
import { join } from "path";
import dotenv from "dotenv";
// import { BodyParser } from "body-parser";

dotenv.config(); // load .env variables

const app: Express = express();
const PORT = process.env.PORT || 3000;
// const staticPath = join(__dirname, "./src/Demo/index.html");
// app.use();

// Get credentials from .env
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DBNAME || "campus360";

// Build MongoDB Atlas URL
const MONGO_URL = `mongodb+srv://${username}:${password}@campus360.byltmey.mongodb.net/${dbName}?retryWrites=true&w=majority`;

let db: Db | null = null;

const initializeDBAndServer = async (): Promise<void> => {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    db = client.db(dbName);

    app.listen(PORT, () => {
      console.log(`⚡ Server running at http://localhost:${PORT}/`);
    });
  } catch (e: any) {
    console.error(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// ✅ Example route
app.get("/", (req, res) => {
  res.sendFile("./src/Demo/index.html", { root: __dirname });
});
