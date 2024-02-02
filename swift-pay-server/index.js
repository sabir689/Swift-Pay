const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lyyi68r.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // user collection
    const userCollection = client.db("SwiftPayDb").collection("users");
    // product collection
    const productCollection = client.db("SwiftPayDb").collection("products");
    // bookmark collection
    const bookmarkCollection = client.db("SwiftPayDb").collection("bookmarks");
    // user post
    app.post("/api/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    // product get
    app.get("/api/products", async (req, res) => {
      const { search, sort } = req.query;
      const query = {
        productName: { $regex: search, $options: "i" },
      };
      const sortOptions = {};
      if (sort === "lowToHigh") {
        sortOptions.price = 1;
      } else if (sort === "highToLow") {
        sortOptions.price = -1;
      }
      const result = await productCollection
        .find(query)
        .sort(sortOptions)
        .toArray();
      res.send(result);
    });
    // product post
    app.post("/api/products", async (req, res) => {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.send(result);
    });

    // bookmark api
     app.post("/api/bookmarks", async (req, res) => {
       const bookmarks = req.body;
       const result = await bookmarkCollection.insertOne(bookmarks);
       res.send(result);
     });
     app.get("/api/bookmarks", async (req, res) => {
       const result = await bookmarkCollection.find().toArray();
       res.send(result);
     });



    // offers page
    app.get("/api/offers", async (req, res) => {
      const result = await offerCollection.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Taka is running");
});

app.listen(port, () => {
  console.log(`Taka is running on port :${port}`);
});
