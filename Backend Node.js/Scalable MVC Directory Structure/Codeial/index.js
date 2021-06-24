const express = require('express');
const app = express();

const port = 8000;

// Middleware to parse the requests body of post requests
app.use(express.urlencoded({extended: true}));

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running on port : ${port}`);
});