const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");
const { v4: uuidv4 } = require("uuid");

const createLoginUser = async (req, res) => {
  const { username, password } = req.body;

  // LOGIN USER
  let user = await User.findOne({ username: username });
  if (user) {
    const passwordsMatch = user.comparePasswords(password);
    if (passwordsMatch) {
    }
  } else {
    // CREATE USER
    const userId = uuidv4();
    user = await User.create({
      user_id: userId,
      username: username,
      password: password,
    });
    if (!user) {
      throw new BadRequestError(
        "Something went wrong, please try again later."
      );
    }
  }

  const token = user.getJWToken();

  res.status(StatusCodes.CREATED).json({ user: { ...req.body }, token: token });
};

const getGreetingMsg = async (req, res) => {
  res.send("greetings");
};

module.exports = { createLoginUser, getGreetingMsg };
