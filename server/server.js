require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connectDB");
const mainRouter = require("./routes/mainRoutes");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();

app.use(express.json()); // dolaze podaci kao string i onda ih parsiramo u JS objekat
app.use(express.static("public/build"));

// routes
app.use("/", mainRouter);

//middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is up and listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
