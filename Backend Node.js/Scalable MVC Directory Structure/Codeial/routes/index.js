const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home_controller');


router.get('/', home_controller.home_action);

// router.get('/signup', user_sign_up_controller.sign_up_action);

router.use('/signup', require('./signup'));

router.use('/signin', require('./signin'));

router.use('/users', require('./users'));

router.use('/signout', require('./signout'));

module.exports = router;