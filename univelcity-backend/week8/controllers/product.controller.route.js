const Product = require("../models/Product.js");
const mongoose = require('mongoose');

//route to post product
const createProduct = async (req, res) => {
  try {
    // Check if a product with the same name already exists
    const existingProduct = await Product.findOne({ name: req.body.name });

    if (existingProduct) {
      return res
        .status(409)
        .json({
          message: "Product name already exists, consider updating instead",
        });
    }
    if (!req.body.name || !req.body.quantity || !req.body.price) {
      res.status(400).json({ message: "Kindly enter all required fields" });
    } else {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all products route
const getProducts = async (req, res) => {
  const products = await Product.find({}); // initialize the products
  res.status(200).json(products); // get all products if status is 200
};

// Get a single product by its ID
const getProduct = async (req, res) => {
  try {
    // const { id } = req.params;
    // const product = await Product.findById(id);

    const product = await Product.findOne({ _id: req.params.id }); // used findOne instead of findById, *spot the diff, same result gotten.

    if (!product) {
      return res.status(404).json("Product not Available");
    }

    res.status(200).json(product);
  } catch (error) {
    // Check if it's a CastError (invalid ObjectId format)
    if (error instanceof mongoose.CastError) {
      return res.status(404).send("Product not available");
    }

    res.status(500).json({ message: error.message });
  }
};

//Update a product on the database
const updateProduct = async (req, res) => {
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
};

// Delete a product from the database
const deleteProduct = async (req, res) => {
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
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
