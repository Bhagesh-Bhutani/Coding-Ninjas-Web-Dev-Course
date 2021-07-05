const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_sign_in_controller = require('../controllers/user_sign_in_controller');

router.get('/', user_sign_in_controller.user_sign_in_action);

// To handle login
router.post('/', passport.authenticate(
    'local',
    {
        failureRedirect: '/signin'
    }
), user_sign_in_controller.createSession);

module.exports = router;