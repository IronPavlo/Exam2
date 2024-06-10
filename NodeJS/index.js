const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.use(express.json());
const PORT = 8080;
const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://mmokasko:hxbFuPwAReRlzOQX@cluster0.pl0rowk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionString);
let conn;
let db;
async function connect() {
  try {
    conn = await client.connect();
    db = conn.db("PortFolioSite");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.get("/users", async (req, res) => {
  let collection = await db.collection("Users");

  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});

app.listen(PORT, () => {
  console.log("Server Started");
});
