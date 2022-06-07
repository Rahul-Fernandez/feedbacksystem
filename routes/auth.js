const express= require('express');
const authController = require('../controllers/auth');
const authController2 = require('../controllers/student')
const router = express.Router();



router.post('/register',authController.register);
  
router.post('/student',authController2.register);
 

module.exports = router;