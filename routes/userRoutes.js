const express = require("express");
const router = express.Router();
const {registerUser,login,currentUser} = require("../controllers/userController")

router.post('/register',registerUser)

router.post('/login',login)

router.get('/currentUser',currentUser)

module.exports = router;