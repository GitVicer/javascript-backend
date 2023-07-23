const express = require("express");
const router = express.Router();
const {getContact,createContact} = require("../controllers/contactControllers")

router.get('/',getContact );
router.post("/",createContact);

module.exports = router;