const express = require('express');
const passport = require('passport');
const router = express.Router();

const user_sign_up_controller = require('../controllers/user_sign_up_controller');

router.get('/', passport.login_signup_handler, user_sign_up_controller.sign_up_action);

router.post('/', user_sign_up_controller.create);

module.exports = router;