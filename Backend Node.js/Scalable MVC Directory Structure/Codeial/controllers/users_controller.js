const passport = require('passport');
// Here the thing to remember is that each time we require passport,
// no new instance is created, node.js preserves the instance from the beginning
// which optimises things, and which preserves the keys we defined in passport
// which correspond to middlewares we defined in passport-local-strategy.js module

module.exports.users_action = function(req, res){
    return res.render('user_profile', {
        title: "User Profile"
    });
};

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}