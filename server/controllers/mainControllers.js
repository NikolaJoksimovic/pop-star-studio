const User = require("../model/user");

const createLoginUser = async (req, res) => {
  res.send("hey");
};

const getGreetingMsg = async (req, res) => {
  res.send("greetings");
};

module.exports = { createLoginUser, getGreetingMsg };
