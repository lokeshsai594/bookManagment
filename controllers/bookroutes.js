const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const book = mongoose.model('books');

router.get('/all', async (req, res) => {                     //to get all the records
     const allBooks = await book.find();
     res.json(allBooks);
});

router.get('/:id', async (req, res) => {                //to get a specified record
    const result = await book.find({_id:req.params.id});
    res.json(result);
});

router.post('/create', async (req, res) => {        //to create a new record
    const createBook = new book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary
    });
    try{
       const savedBook = await createBook.save();
       res.json(savedBook);
    }catch(err){
       res.json({ message: err });
    }
});

router.patch('/:bookName', async (req, res) => {      //to update a existing record
    try{
       const updatedBook = await book.updateOne(
           { "title": req.params.bookName},
           { $set: {
               title: req.body.title,
               author: req.body.author,
               summary: req.body.summary
           }}
       );
       res.json(updatedBook);
    }catch(err){
       res.json({ message: err});
    }
});

router.delete('/:bookName', async (req, res) => {               //to delete a record
    const deleteBook = await book.deleteOne({ "title": req.params.bookName });
    res.json(deleteBook);
});

module.exports = router;