const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

//midleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    app.listen(process.env.PORT, () => console.log("code is running"));
  } catch (err) {
    console.log("database connection failed", err);
  }
}

run();
