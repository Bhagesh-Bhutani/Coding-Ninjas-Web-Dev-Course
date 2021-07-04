const User = require('../models/user');

// for get request at /signin
module.exports.user_sign_in_action = function(req, res){
    console.log(req.cookies);
    return res.render('user_sign_in', {
        title: 'Login'
    });
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