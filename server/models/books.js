//books.js Andy Bandela 301282674 My Favourite Books
const mongoose = require('mongoose');

// create a model class
const Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
