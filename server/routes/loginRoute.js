const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.get("/:username/:password", loginController.checkUser)

module.exports = router;
