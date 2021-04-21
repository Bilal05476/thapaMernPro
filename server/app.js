const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./DB/conn");
// const User = require("./model/userSchema");

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

app.listen(3001, () => {
  console.log(`Server is running at port ${PORT}`);
});
