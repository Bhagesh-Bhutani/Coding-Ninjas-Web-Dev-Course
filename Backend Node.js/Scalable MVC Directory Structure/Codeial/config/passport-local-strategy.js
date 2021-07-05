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

        return done(null, user);
    });
});