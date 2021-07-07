const express = require('express');
const router = express.Router();
const passport = require('passport');

const users_controller = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication, users_controller.users_action);

module.exports = router;