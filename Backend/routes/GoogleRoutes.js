const express = require('express');
const app = express();
const UserController = require('../controllers/UserController');


const router = express.Router();



router
.route('/google')  //Child Route
.get(UserController.SignUp)
router
.route('/callback')
.get(UserController.Login)
router
.route('/failure')  //Child Route
.get(UserController.SignUp)
router
.route('/Protected')
.get(UserController.Login)
router
.route('/logout')
.get(UserController.Login)





module.exports = router;
