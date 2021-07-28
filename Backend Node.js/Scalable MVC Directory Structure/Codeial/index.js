const express = require('express');
const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');
// Cookie Parser not needed now in newer versions of express-session since 1.5.0
// const cookieParser = require('cookie-parser');

const db = require('./config/mongoose');

// used for session cookie
// Using cookie-parser may result in issues if the secret is not the same between express-session and cookie-parser
const session = require('express-session');
// For passport, require both passport and passport-local config module
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy'); // runs this code to define all the functions in passport

// MongoStore for persistent sessions, to maintain sessions even when server is restarted
const MongoStore = require('connect-mongo')(session);

// Require node-sass-middleware
const sassMiddleware = require('node-sass-middleware');

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middle for sass
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: false,
    outputStyle: 'extended',
    prefix: '/css'
}));

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
// mongo store is used to store the session cookie in MongoDB
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    }, function(err){
        console.log(err || 'connect-mongo setup ok');
    })
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