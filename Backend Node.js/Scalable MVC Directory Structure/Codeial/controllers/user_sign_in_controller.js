// for get request at /signin
module.exports.user_sign_in_action = function(req, res){
    return res.render('user_sign_in', {
        title: 'Login'
    });
};

// for post request at /signin
// This will run only when passport authenticates it in the route endpoint, otherwise failure redirect has been set up in signin /routes
module.exports.createSession = function(req, res){
    return res.redirect('/users/profile');
};