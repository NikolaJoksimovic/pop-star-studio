const express = require("express");
const router = express.Router();

const {
  createLoginUser,
  getGreetingMsg,
} = require("../controllers/mainControllers");

router.route("/").get(getGreetingMsg);
router.route("/").post(createLoginUser);

module.exports = router;
