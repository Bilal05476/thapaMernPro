const express = require("express");
const app = express();

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
  console.log("Server is running at port 3001");
});
