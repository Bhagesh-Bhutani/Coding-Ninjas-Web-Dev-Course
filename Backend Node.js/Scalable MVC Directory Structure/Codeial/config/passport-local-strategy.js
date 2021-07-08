const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
}, function(email, password, done){
    // Find the user
    User.findOne({
        email: email
    }, function(err, user){
        if(err){
            console.log("Error in finding User --> Passport");
            return done(err);
        }

        // Check if user does not exist or password does not match
        if(!user || user.password != password){
            console.log("Invalid username/password");
            return done(null, false);
        }

        // Here user is authenticated
        return done(null, user);
    });
}));

// Serialization, encrypting the user id in the cookie to be sent to client
passport.serializeUser(function(user, done){
    return done(null, user.id); // encrypts the user id into the cookie
});

// Deserialization, client makes request with cookie, decrypting user id from it and finding the corresponding user
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("Error in finding User --> Passport");
            return done(err);
        }

        return done(null, user); // deserialized and put the user inside done callback, this user will be stored in req.user by passport
    });
});

// Setting up middlewares for checking authenticated state and redirecting accordingly
// passport defined req.isAuthenticated

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    // User is not Authenticated
    return res.redirect('/signin');
}

// Middleware for login and signup pages, if authenticated, redirect to profile page, else call next and let
// endpoint actions do the job

passport.login_signup_handler = function(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    // Not Authenticated, so call next and endpoint handlers will render the requested page
    return next();
}

// Middleware to handle requests at /users/sign-out
passport.sign_out_handler = function(req, res, next){
    if(req.isAuthenticated()){
        return next(); // next called for sign_out_action to perform sign out process
    }

    // Here user is not Authenticated
    return res.redirect('/signin');
}

// Middleware to set the authenticated user which is to be given to views, via res.locals
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user; // req.user contains the authenticated user
    }

    return next();
}

module.exports = passport;