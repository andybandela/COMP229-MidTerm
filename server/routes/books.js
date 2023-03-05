//books.js Andy Bandela 301282674 My Favourite Books
// modules required for routing
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { update } = require('../models/books');

// define the book model
const book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    res.render('books/add',{title: "Books - Add Book"});

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', async(req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const cont = req.body;
    try {
      const newBook = await book.create({
        Title: cont.title,
        Price: cont.price,
        Author: cont.author,
        Genre: cont.genre
      });
    } catch (error) {
      console.log(error.message);
    }
    res.redirect('/books');

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', async(req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    try {
      const cont = await book.findById(req.params.id);
      res.render('books/details',{title: "Books - Update Book", books: cont});
    } catch (error) {
      console.log(error.message);
    }
});

// POST - process the information passed from the details form and update the document
router.post('/:id', async(req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    try {
      const updateData = req.body;
      const update = await book.findOneAndUpdate({_id:req.params.id},{
        Title: updateData.title,
        Price: updateData.price,
        Author: updateData.author,
        Genre: updateData.genre
      });
      res.redirect('/books');
    } catch (error) {
      console.log(error.message);
    }

});

// GET - process the delete by user id
router.get('/delete/:id', async(req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    try {
      const deleted = await book.findOneAndDelete({_id:req.params.id});
      res.redirect('/books');
    } catch (error) {
      console.log(error.message);
    }
});


module.exports = router;
