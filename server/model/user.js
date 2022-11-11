require("dotenv").config();
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  user_id: {
    type: String,
  },
  username: {
    type: String,
    minlength: [3, "auth-error1"],
    maxlength: [15, "auth-error2"],
    unique: true,
    required: [true, "auth-error3"],
  },
  password: {
    type: String,
    minlength: [3, "auth-error4"],
    required: [true, "auth-error5"],
  },
});

// plugins
userSchema.plugin(uniqueValidator);

// middleware
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // await has to be there even if it says it has no effect!
});

// methods
userSchema.methods.getJWToken = function () {
  return jwt.sign(
    { id: this.user_id, username: this.username },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFESPAN,
    }
  );
};
userSchema.methods.comparePasswords = async function (checkPassword) {
  const isMatch = await bcrypt.compare(checkPassword, this.password);
  console.log(isMatch);
  return isMatch;
};
module.exports = mongoose.model("User", userSchema);
