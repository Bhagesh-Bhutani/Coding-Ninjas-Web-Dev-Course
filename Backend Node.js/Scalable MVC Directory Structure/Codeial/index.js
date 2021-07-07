const express = require('express');
const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');
// const cookieParser = require('cookie-parser');

const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');

// For passport, require both passport and passport-local config module
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy'); // runs this code to define all the functions in passport

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to set up Static File Access
app.use(express.static('./assets'));

// Middleware to parse the requests body of post requests
app.use(express.urlencoded({extended: true}));

// Middleware for cookie parser
// app.use(cookieParser());

// Middleware to set up Layouts
app.use(expressLayouts);

// Extract styles and scripts from the subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Session middleware
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// Passportjs middlewares
app.use(passport.initialize()); // Initializes passportjs
app.use(passport.session()); // Used to get the true deserialized object from cookie

//Middleware to set the authenticated user in req.locals for the views
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running on port : ${port}`);
});