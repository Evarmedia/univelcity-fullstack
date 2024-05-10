const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/Product.js");

app.use(express.json()); // middleware to use json file format

// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Best Backend");
});

// get all products route
app.get("/api/products", async (req, res) => {
  const products = await Product.find({}); // initialize the products
  res.status(200).json(products); // get all products if status is 200
});

//route to post product
app.post("/api/products", async (req, res) => {
  try {
    if (!req.body.name || !req.body.quantity || !req.body.price) {
      res.status(400).json({ message: "Kindly enter all required fields" });
    } else {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product by its ID
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.send("Product not Available");
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//UPdate data on the database
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found, cannot delete" });
    }

    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// connect to the database using mongoose
mongoose.connect(
    "mongodb+srv://mishakmanuel:mydatabase4mongo@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection to DataBase Successful!");

    app.listen(3000, (req, res) => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
