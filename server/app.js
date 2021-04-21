const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Import Database connection
require("./DB/conn");

// Convert Data into Json
app.use(express.json());

// link routes
app.use(require("./routes/auth"));

const PORT = process.env.PORT;

//Middleware
const middleWare = (req, res, next) => {
  console.log("MiddleWare");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World from Server");
});
app.get("/about", middleWare, (req, res) => {
  res.send("Hello World from About");
});
app.get("/contact", (req, res) => {
  res.send("Hello World from Contact");
});
app.get("/signin", (req, res) => {
  res.send("Hello World from SignIn");
});
app.get("/signup", (req, res) => {
  res.send("Hello World from SignUp");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
