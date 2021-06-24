const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users_controller');

router.get('/profile', users_controller.users_action);

module.exports = router;