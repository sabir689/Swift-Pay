const express = require("express");
const cors = require("cors");
const app = express();
const SSLCommerzPayment = require("sslcommerz-lts");
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

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // user collection
    const userCollection = client.db("SwiftPayDb").collection("users");
    // product collection
    const productCollection = client.db("SwiftPayDb").collection("products");
    const orderCollection = client.db("SwiftPayDb").collection("order");
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


    // const tran_id = new ObjectId().toString();

    // offers get
    app.get("/offers", async (req, res) => {
      const cursor = offerCollection.find();
      const result = await cursor.toArray();
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


    // payment post
    app.post("/order", async (req, res) => {
      const product = await orderCollection.findOne({
        _id: new ObjectId(req.body.productId),
      });

      console.log(product);
      const order = req.body;
      console.log(req.body);
      const data = {
        total_amount: product?.price,
        currency: order.category,
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `http://localhost:5000/payment/success/${tran_id}`,
        fail_url: "http://localhost:3030/fail",
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: order.name,
        cus_email: "customer@example.com",
        cus_add1: order.address,
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: order.number,
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: order.postCode,
        ship_country: "Bangladesh",
      };
      console.log(data);
      // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      // sslcz.init(data).then((apiResponse) => {
      //   // Redirect the user to payment gateway
      //   let GatewayPageURL = apiResponse.GatewayPageURL;
      //   res.send({ url: GatewayPageURL });
      //   console.log("Redirecting to: ", GatewayPageURL);
      // });

      // app.post("/payment/success/:tranId", async (req, res) => {
      //   console.log(req.params.tranId);
      // });
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
