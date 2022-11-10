const express = require("express");
const router = express.Router();

const { getGreetingMsg } = require("../controllers/mainControllers");

router.route("/").get(getGreetingMsg);

module.exports = router;
