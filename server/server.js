require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const express = require("express");
const connectDB = require("./db/connectDB");
const mainRouter = require("./routes/mainRoutes");
const authRouter = require("./routes/authRoutes");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();

app.use(express.json()); // dolaze podaci kao string i onda ih parsiramo u JS objekat
app.use(express.static("public/build"));
app.use(cors());

// routes
app.use("/", mainRouter);
app.use("/auth", authRouter);

// Refresh Cannot GET solution
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/build/index.html");
});

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
