const User = require('../models/user');

module.exports.users_action = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(err){
                console.log("Error while finding user by getting id from cookie");
                return res.redirect('/signin');
            }
            if(user){
                return res.render('user_profile', {
                    title: "Welcome",
                    user: user
                });
            }

            // User not found corresponding to cookie
            return res.redirect('/signin');
        });
    } else {
        // Client does not have a cookie, so send the client to login page
        return res.redirect('/signin');
    }
};