const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: ["http://127.0.0.1:5500", "http://localhost:5173"] }));

app.use(express.json());
const PORT = 8080;
const { MongoClient, ObjectId } = require("mongodb");
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

app.get("/products/:search/:query", async (req, res) => {
  let collection = await db.collection("Products");
  console.log(req.params.search);

  //console.log(aggregTest);
  let result = await collection.find({}).toArray();
  if (req.params.search == "yes") {
    let aggregTest = await collection
      .aggregate([
        {
          $search:
            /**
             * index: The name of the Search index.
             * text: Analyzed search, with required fields of query and path, the analyzed field(s) to search.
             * compound: Combines ops.
             * span: Find in text field regions.
             * exists: Test for presence of a field.
             * near: Find near number or date.
             * range: Find in numeric or date range.
             */
            {
              index: "searchname",
              text: {
                query: `${req.params.query}`,
                path: {
                  wildcard: "*",
                },
              },
            },
        },
      ])
      .toArray();
    res.send(aggregTest).status(200);
  } else {
    res.send(result).status(200);
  }
});
app.get("/products/:id", async (req, res) => {
  let collection = await db.collection("Products");
  let result = await collection
    .find({ _id: new ObjectId(req.params.id) })
    .toArray();
  res.send(result).status(200);
});
app.post("/sell", async (req, res) => {
  try {
    let collection = await db.collection("Products");
    let product = req.body;
    console.log(product);
    collection.insertOne(product);
    res.json(product).status(200);
  } catch (error) {
    res.json(error);
  }
});
app.patch("/update/:id", async (req, res) => {
  try {
    let collection = await db.collection("Products");
    let product = req.body;
    collection.replaceOne({ _id: new ObjectId(req.params.id) }, product);

    res.send(result).status(200);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log("Server Started");
});
