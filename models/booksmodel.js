const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    summary: { type: String }
});


module.exports = mongoose.model('books', booksSchema);