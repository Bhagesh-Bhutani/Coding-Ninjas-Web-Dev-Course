const express = require('express');
const router = express.Router();
const passport = require('passport');
// passport-local-strategy.js module has implemented .use, .serializeUser and .deserializeUser functions
// also 2 middlewares have been defined: .checkAuthentication and .setAuthenticatedUser

const user_sign_in_controller = require('../controllers/user_sign_in_controller');

router.get('/', passport.login_signup_handler ,user_sign_in_controller.user_sign_in_action);

// To handle login
router.post('/', passport.authenticate(
    'local',
    {
        failureRedirect: '/signin'
    }
), user_sign_in_controller.createSession);

module.exports = router;