const express = require('express');
const app = express();
const UserController = require('../controllers/UserController');


const router = express.Router();



router
.route('/signup')  //Child Route
.post(UserController.SignUp)
router
.route('/login')
.post(UserController.Login)

module.exports = router;
