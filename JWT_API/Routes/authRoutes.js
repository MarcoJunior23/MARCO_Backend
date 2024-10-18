const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
//const authControllerget = require('../controllers/authController')
// Rota para registrar novos usuarios

router.post('/register',authController.register)

// rota para login

router.post('/login',authController.login)
router.get('/register',authController.register)
//router.get('/registerlist',authController.registerlist)

module.exports = router