require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const mainRouter = require("./routes/mainRoutes");

const app = express();

app.use(express.json());
app.use(express.static("public/build"));

// routes
app.use("/", mainRouter);

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
