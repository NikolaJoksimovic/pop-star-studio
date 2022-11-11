const express = require("express");
const router = express.Router();

const { createLoginUser } = require("../controllers/authControllers");

router.route("/createlogin").post(createLoginUser);

module.exports = router;
