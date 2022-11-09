const User = require("../model/user");

const createLoginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = User.create({ username: username, password: password });
  } catch (error) {}
  res.send("hey");
};

const getGreetingMsg = async (req, res) => {
  res.send("greetings");
};

module.exports = { createLoginUser, getGreetingMsg };
