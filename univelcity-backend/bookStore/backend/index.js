const express = require("express");
const mongoose = require("mongoose");

const bookRouter = require('./routes/book.route.js')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello backend");
});

app.use('/api/book', bookRouter);


app.listen(3000, (req, res) => {
    console.log("listening on port 3000");
  });

  mongoose.connect("mongodb+srv://mishakmanuel:mydatabase4mongo@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connectido successfully!");
}).catch(()=>{
    console.log("Failed to connect");
});
