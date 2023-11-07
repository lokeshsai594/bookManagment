const mongoose = require('mongoose');
require('./booksmodel');


mongoose.connect("mongodb://localhost:27017/books",{useNewUrlParser:true, useUnifiedTopology:true }, (error) => {
    if(!error) { console.log("Connected to DB") }
    else { console.log("Error connecting to DB" + error) }
});

