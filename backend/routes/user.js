const express = require('express');
const {register} = require('../controllers/user');
const {activateAccount} = require('../controllers/user');
const {login} = require('../controllers/user');


const router = express.Router();


router.post('/register', register);

router.post('/activate', activateAccount);

router.post('/login', login);

module.exports = router;