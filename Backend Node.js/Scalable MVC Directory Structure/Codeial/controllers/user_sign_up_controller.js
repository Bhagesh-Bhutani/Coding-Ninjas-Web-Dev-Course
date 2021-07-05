const User = require('../models/user');

// for get request at /signup
module.exports.sign_up_action = function(req, res){
    if(req.cookies.user_id){
        // Handle whether client has a valid cookie
        User.findById(req.cookies.user_id, function(err, user){
            if(err){
                console.log("Error while getting user from database corresponding to the cookie");
                return res.render('user_sign_up', {
                    title: "Sign Up!"
                });
            }
            if(user){
                // Here its guaranteed that user exists in db, so redirect to the below path, its controller's
                // action will surely detect the same user and welcome the user
                return res.redirect('/users/profile');
            }

            // User not found corresponding to the cookie id, so redirect user to signup page
            return res.render('user_sign_up', {
                title: "Sign Up!"
            });
        });
    } else {
        return res.render('user_sign_up', {
            title: "Sign Up!"
        });
    }
};

// for post request at /signup and create a user
module.exports.create = function(req, res){
    // Check if password and confirm password are same or not
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    // Check if User is already Created (i.e. email is already taken)
    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(err){
            console.log("Error while finding");
            return res.redirect('back');
        }
        if(user){
            console.log("User already exists");
            return res.redirect('back');
        }
        // Here user does not exist, so create one
        User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }, function(err, user){
            if(err){
                console.log("Error while creating the user");
                return res.redirect('back');
            }
            console.log("Created:", user);
            res.cookie('user_id', user.id);
            return res.redirect('/signin');
        });
    });
}