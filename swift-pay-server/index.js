const express = require("express");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz-lts");
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
    // bookmark collection
    const bookmarkCollection = client.db("SwiftPayDb").collection("bookmarks");
    const offerCollection = client.db("SwiftPayDb").collection("offers");
    // order collection
    const orderCollection = client.db("SwiftPayDb").collection("order");
    // brand collection
    const brandCollection = client.db("SwiftPayDb").collection("brands");
    // post order
    // app.post("/api/orders", async (req, res) => {
    //   const orders = req.body;
    //   const result = await orderCollection.insertOne(orders);
    //   res.send(result);
    // });
    // app.post("/api/orders", async (req, res) => {
    //   const orders = req.body;
    //   const result = await orderCollection.insertOne(orders);
    //   res.send(result);
    // });
    // app.post("/api/orders", async (req, res) => {
    //   const orders = req.body;
    //   const result = await orderCollection.insertOne(orders);
    //   res.send(result);
    // });
    // offer
    app.get("/api/offers", async (req, res) => {
      const cursor = offerCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/api/brands", async (req, res) => {
      const cursor = brandCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/api/brands", async (req, res) => {
      const brands = req.body;
      const result = await brandCollection.insertOne(brands);
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
    // app.get("/api/users", async (req, res) => {
    //   const result = await userCollection.find().toArray();
    //   res.send(result);
    // });
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

    // product post
    app.post("/api/products", async (req, res) => {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.send(result);
    });
    // product get
    // app.get("/api/products", async (req, res) => {
    //   const products = req.body;
    //   const result = await productCollection.find(products).toArray();
    //   res.send(result);
    // });
    app.get("/api/products", async (req, res) => {
      try {
        let query = {};
        const category = req.query.category;
        const { sort } = req.query;

        if (category) {
          query.Category = category;
        }

        // Check if search is defined and it's a string
        // if (search && typeof search === "string") {
        //   query.productName = { $regex: search, $options: "i" };
        // }

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

        res.json(result);
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
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

    // Get My porducts
    app.get("/myproducts", async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    // My Product delete
    app.delete("/myPorduct/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });
    // Find My Product
    app.get("/editproduct/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    app.delete("/api/bookmarks/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookmarkCollection.deleteOne(query);
      res.send(result);
    });

    // payment post
    const tran_id = new ObjectId().toString();
    app.post("/api/order", async (req, res) => {
      const product = await productCollection.findOne({
        _id: new ObjectId(req.body.productId),
      });

      console.log(product);
      const order = req.body;
      // console.log(req.body);
      const data = {
        total_amount: product?.price,
        currency: order.userInfo.category,
        tran_id: tran_id,

        // success_url: "http://localhost:3030/success",
        success_url: `http://localhost:5000/payment/success/${tran_id}`,

        fail_url: "http://localhost:3030/fail",
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: order?.userInfo.name,
        cus_email: "customer@example.com",
        cus_add1: order?.userInfo.address,
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: order?.userInfo.postCode,
        cus_country: "Bangladesh",
        cus_phone: order?.userInfo.number,
        cus_fax: "01711111111",
        ship_name: order?.userInfo.name,
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
      };
      console.log(data);
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz
        .init(data)
        .then((apiResponse) => {
          let GatewayPageURL = apiResponse.GatewayPageURL;
          res.send({ url: GatewayPageURL });
          console.log("Redirecting to: ", GatewayPageURL);
          const finalOrder = {
            product,
            paidStatus: false,
            transactionId: tran_id,
          };
          const result = orderCollection.insertOne(finalOrder);
        })
        .catch((error) => {
          console.error("Error during sslCommerzPayment initialization", error);
          res.status(500).send({ error: "Internal error" });
        });

      app.get("/api/order", async (req, res) => {
        const result = orderCollection.find().toArray;
        res.send(result);
      });
      app.post("/payment/success/:tranId", async (req, res) => {
        console.log(req.params.tranId);
        const result = await orderCollection.updateOne(
          { transactionId: req.params.tranId },
          {
            $set: {
              paidStatus: true,
            },
          }
        );
        console.log(result);
        if (result.modifiedCount > 0) {
          res.redirect(
            `http://localhost:5173/payment/success/${req.params.tranId}`
          );
        }
      });

      // comment
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
