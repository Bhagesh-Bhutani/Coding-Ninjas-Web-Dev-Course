// for get request at /signup
module.exports.sign_up_action = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign Up!"
    });
};

// for post request at /signup
module.exports.create = function(req, res){
    return res.send(req.body);
}