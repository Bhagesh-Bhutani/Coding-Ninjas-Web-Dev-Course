const express = require('express');
const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to set up Static File Access
app.use(express.static('./assets'));

// Middleware to parse the requests body of post requests
app.use(express.urlencoded({extended: true}));

// Middleware to set up Layouts
app.use(expressLayouts);

// Extract styles and scripts from the subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running on port : ${port}`);
});