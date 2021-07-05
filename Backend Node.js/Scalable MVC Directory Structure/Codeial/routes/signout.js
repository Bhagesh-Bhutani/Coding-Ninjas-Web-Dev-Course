const express = require('express');
const router = express.Router();

const user_sign_out_controller = require('../controllers/user_sign_out_controller');

router.get('/', user_sign_out_controller.user_sign_out_action);


module.exports = router;