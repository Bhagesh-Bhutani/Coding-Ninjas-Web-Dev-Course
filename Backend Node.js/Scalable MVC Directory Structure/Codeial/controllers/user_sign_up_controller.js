const User = require('../models/user');

// for get request at /signup
module.exports.sign_up_action = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign Up!"
    });
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
            return res.redirect('/signin');
        });
    });
}