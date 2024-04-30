const express = require("express");
const router = express.Router();

const {Contactus} = require("../Controllers/Contactus");

router.post("/contact",Contactus);

module.exports = router;