const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

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

// methods
userSchema.methods.getJWToken = function () {
  return jwt.sign();
};

module.exports = mongoose.model("User", userSchema);
