const express = require('express');
const router = express.Router();

const user_sign_in_controller = require('../controllers/user_sign_in_controller');

router.get('/', user_sign_in_controller.user_sign_in_action);

router.post('/', user_sign_in_controller.createSession);

module.exports = router;