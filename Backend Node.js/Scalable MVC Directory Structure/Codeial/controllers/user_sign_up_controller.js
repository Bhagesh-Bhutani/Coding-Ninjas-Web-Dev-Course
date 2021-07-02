module.exports.sign_up_action = function(req, res){
    return res.render('user_sign_up', {
        title: "Sign Up!"
    });
};

module.exports.new_user_sign_up_action = function(req, res){
    return res.send(req.body);
}