// for route /signout

module.exports.user_sign_out_action = function(req, res){
    res.clearCookie('user_id');
    return res.redirect('/signin');
}