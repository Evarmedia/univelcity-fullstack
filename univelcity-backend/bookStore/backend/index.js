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

mongoose.connect();
