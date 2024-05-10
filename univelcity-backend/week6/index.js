const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product.js');

app.use(express.json()); // middleware to use json file format


app.get('/', (req, res) => { // default route
    res.send("Welcome to the Best Backend");
});


app.get('/api/products', async (req, res) => { // get all products route
    const products = await Product.find({}); // initialize the products
    res.status(200).json(products); // get all products if status is 200
});

app.post('/api/products', async (req, res) => {
    try {

        if (!req.body.name || !req.body.quantity || !req.body.price) {
            res.status(400).json({message: "Kindly enter all required fields"});
        }
        else{
            const product = await Product.create(req.body);
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000');
});



mongoose.connect("mongodb+srv://mishakmanuel:ROcA1kUfF4w9pwbs@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {

    console.log("connection Successful!")

}).catch(() => {

    console.log("connection failed")

})