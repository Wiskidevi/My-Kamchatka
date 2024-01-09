const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');



router.post('/auth', authController.auth);
router.post('/dashboard', authController.auth);



module.exports = router;