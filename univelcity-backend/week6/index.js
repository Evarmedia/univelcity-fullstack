const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Best Backend");
});


app.get('/api/data/', (req, res) => {
    const data = [
        {
            name: 'Adam',
            age: 36,
        },
        {
            name: 'John',
            age: 40,
        },
        {
            name: 'Eve',
            age: 40,
        }
    ]
    res.json(data);
});

app.listen(3020, (req, res) => {
    console.log('Server is listening on port 3020');
});

mongoose.connect("mongodb+srv://mishakmanuel:ROcA1kUfF4w9pwbs@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {

    console.log("connection Successful!")

}).catch(() => {

    console.log("connection failed")

})