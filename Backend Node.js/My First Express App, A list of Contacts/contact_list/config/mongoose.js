const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', function(err){
    console.log("Error between");
    console.log(err);
});

db.once('open', function(){
    console.log("Successfully connected to the database");
});

// this catch is for initial error handling
mongoose.connect('mongodb://localhost/contacts-db-v2', {useNewUrlParser: true, useUnifiedTopology: true})
.catch(err => {
    console.error("Initial error");
    console.log(err);
});