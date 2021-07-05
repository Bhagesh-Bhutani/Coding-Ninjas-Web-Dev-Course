const User = require('../models/user');

// for get request at /signin
module.exports.user_sign_in_action = function(req, res){
    // console.log(req.cookies);
    if(req.cookies.user_id){
        // Handle whether client has a valid cookie
        User.findById(req.cookies.user_id, function(err, user){
            if(err){
                console.log("Error while getting user from database corresponding to the cookie");
                return res.render('user_sign_in', {
                    title: 'Login'
                });
            }
            if(user){
                // Here its guaranteed that user exists in db, so redirect to the below path, its controller's
                // action will surely detect the same user and welcome the user
                return res.redirect('/users/profile');
            }

            // User not found corresponding to the cookie id, so redirect user to login page
            return res.render('user_sign_in', {
                title: 'Login'
            });
        });
    } else {
        return res.render('user_sign_in', {
            title: 'Login'
        });
    }
};

// for post request at /signin
module.exports.createSession = function(req, res){
    // Find the user
    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(err){
            console.log("Error while finding the user");
            return res.redirect('back');
        }
        // No error, now handle if user found
        if(user){
            // check password
            if(req.body.password == user.password){
                // Setting the cookie
                res.cookie('user_id', user.id);
                return res.redirect('/users/profile');
            }

            // Password does not match with database record of user
            return res.redirect('back');
            
        }

        // Here user is not found
        return res.redirect('back');
    });
};