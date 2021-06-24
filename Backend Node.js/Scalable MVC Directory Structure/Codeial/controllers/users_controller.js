module.exports.users_action = function(req,res){
    return res.render('users', {
        title: "Users"
    });
};