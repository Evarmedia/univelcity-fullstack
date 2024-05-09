const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    publishedYear: {
      type: Number,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Cat', bookSchema);
module.exports = Book;