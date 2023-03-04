//index.js Andy Bandela 301282674 My Favourite Books
// modules required for routing
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// define the game model
const book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
