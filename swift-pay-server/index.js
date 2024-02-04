const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const offerCollection = client.db("SwiftPayDb").collection("offers");
    // offers collection
    // brand collection
    const brandCollection = client.db("SwiftPayDb").collection("brands");
  

    app.post("/api/orders", async (req, res) => {
      const orders = req.body;
      const result = await orderCollection.insertOne(orders);
      res.send(result);
    });

    app.get("/api/brands", async (req, res) => {
      const cursor = brandCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // user post
    app.post("/api/users", async (req, res) => {
      const user = req.body;
      // insert email if user doesn't exists:
      // you can do this many ways (1. email unique, 2. upsert 3. simple checking)
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/api/users", async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await userCollection.find(query).toArray();
      res.send(result);
    });

    app.patch("/api/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const item = req.body;
      const updatedDoc = {
        $set: {
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          age: item.age,
          gender: item.image,
          photoURL: item.photoURL,
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // product get
    app.get("/api/products", async (req, res) => {
      let query = {};
      const category = req.query.category;
      const { search, sort } = req.query;
      if (category) {
        query.Category = category;
      }
      // Check if search is defined and it's a string
      if (search && typeof search === "string") {
        query.productName = { $regex: search, $options: "i" };
      }
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

    // offers page
    app.get("/api/offers", async (req, res) => {
      const result = await offerCollection.find().toArray();
      res.send(result);
    });

    //  offers post
    app.post("/offers", async (req, res) => {
      const offers = req.body;
      const result = await offerCollection.insertOne(offers);
    });
    // bookmark api
    app.post("/api/bookmarks", async (req, res) => {
      const bookmarks = req.body;
      const result = await bookmarkCollection.insertOne(bookmarks);
      res.send(result);
    });
    app.get("/api/bookmarks", async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await bookmarkCollection.find(query).toArray();
      res.send(result);
    });
    app.delete("/api/bookmarks/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookmarkCollection.deleteOne(query);
      res.send(result);
    });

    // payment post
   

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
