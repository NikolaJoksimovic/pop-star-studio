const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 15,
    unique: true,
    required: [true, "Username must be provided!"],
  },
  password: {
    type: String,
    minlength: 3,
    required: [true, "Password must be provided!"],
  },
});

// plugins
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
