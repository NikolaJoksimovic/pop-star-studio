const CustomAPIError = require("./CustomAPIError");
const { StatusCodes } = require("http-status-codes");

class AuthenicationError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = AuthenicationError;
