// for get request at /signin
module.exports.user_sign_in_action = function(req, res){
    console.log(req.cookies);
    // to change value of cookie from browser
    // res.cookie('user_id', 25);
    return res.render('user_sign_in', {
        title: 'Login'
    });
};

// for post request at /signin
// This will run only when passport authenticates it in the route endpoint, otherwise failure redirect has been set up in signin /routes
module.exports.createSession = function(req, res){
    return res.redirect('/');
};