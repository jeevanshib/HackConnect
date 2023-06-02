const express = require('express');
const {register} = require('../controllers/user');
const {activateAccount} = require('../controllers/user');
const {login, sendVerification} = require('../controllers/user');
const {auth} = require('../controllers/user');
const { authUser } = require('../middleware/auth');


const router = express.Router();


router.post('/register', register);

router.post('/activate',authUser, activateAccount);

router.post('/login', login);

router.post("/sendVerification", authUser, sendVerification);

module.exports = router;