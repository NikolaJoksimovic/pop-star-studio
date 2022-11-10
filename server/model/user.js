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
    minlength: [3, "Username too short. Minimum characters(3)"],
    maxlength: [15, "Username too long. Maximum characters(15)"],
    unique: true,
    required: [true, "Username must be provided."],
  },
  password: {
    type: String,
    minlength: [3, "Password too short. Minimum cdharacters(3)"],
    required: [true, "Password must be provided."],
  },
});

// plugins
userSchema.plugin(uniqueValidator);

// middleware
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

// methods
userSchema.methods.getJWToken = function () {
  return jwt.sign(
    { id: this.user_id, username: this.username },
    process.env.JWT_SECRET
  );
};
userSchema.methods.comparePasswords = function (checkPassword) {
  const isMatch = bcrypt.compare(checkPassword, this.password);
  return isMatch;
};
module.exports = mongoose.model("User", userSchema);
