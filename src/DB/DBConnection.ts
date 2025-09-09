import dotenv from "dotenv";
dotenv.config(); // load .env variables

const { Client } = require("pg");

const client = new Client({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: String(process.env.PGPASSWORD),
  database: process.env.PGDATABASE,
});

module.exports = client;
