const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/Product.js");

const productRouter = require('./routes/product.route.js');

const app = express();
app.use(express.json()); // middleware to use json file format
app.use(express.urlencoded({ extended: false }));

// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Best Backend");
});

app.use('/api/products', productRouter);

app.listen(4000, (req, res) => {
  console.log("Server is listening on port 4000");
});

// connect to the database using mongoose
mongoose.connect(
    "mongodb+srv://mishakmanuel:mydatabase4mongo@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection to DataBase Successful!");
  })
  .catch(() => {
    console.log("connection failed");
  });
