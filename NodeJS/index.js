const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: ["http://127.0.0.1:5500", "http://localhost:5173"] }));

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
    db = conn.db("Shop");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.get("/products", async (req, res) => {
  let collection = await db.collection("Products");

  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});
app.get("/products/:id", async (req, res) => {
  let collection = await db.collection("Products");
  let productID = req.params.id;
  console.log(productID);
  let result = await collection.find({ prodID: productID }).toArray();
  res.send(result).status(200);
});

app.listen(PORT, () => {
  console.log("Server Started");
});
