const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message ||
      "(CustomAPIError)Server has better things to do right now...",
  };

  if (err.name === "ValidationError") {
    let errorMsg = "";
    Object.entries(err.errors).forEach(([key, value]) => {
      console.log(value.message);
      errorMsg = errorMsg + `${value.message}`;
    });
    customError.msg = errorMsg;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};
module.exports = errorHandlerMiddleware;
