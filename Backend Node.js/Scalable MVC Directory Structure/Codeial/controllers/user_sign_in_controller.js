// for get request at /signin
module.exports.user_sign_in_action = function(req, res){
    return res.render('user_sign_in', {
        title: 'Login'
    });
};

// for post request at /signin
module.exports.user_login_action = function(req, res){
    return res.send(req.body);
};