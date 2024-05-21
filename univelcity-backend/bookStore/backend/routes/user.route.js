const express = require('express');
const router  = express.Router();

const {
    signin,
    signup,
    showAllUsers,
} = require('../controller/user.controller.route.js');


router.post('/', signup)

router.post('/login', signin)

router.get('/showusers', showAllUsers)

// router.post('/register', signup)
// router.post('/register', signup)

module.exports = router;