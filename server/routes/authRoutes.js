const express = require("express");
const router = express.Router();

const { createLoginUser } = require("../controllers/authControllers");

router.route("/").post(createLoginUser);

module.exports = router;
