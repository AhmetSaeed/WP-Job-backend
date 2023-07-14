const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/", userController.get);

module.exports = router;
