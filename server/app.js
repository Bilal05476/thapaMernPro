const express = require("express");
const app = express();
const mongoose = require('mongoose');

/*MongoDB Cred*/
const mongoUser = process.env.MONGO_USER_ID;
const mongoKey = process.env.MONGO_USER_KEY;

//MongoDB Connected
const DB = `mongodb+srv://${mongoUser}:${mongoKey}@cluster0.ekzjc.mongodb.net/thapamernDB?retryWrites=true&w=majority`;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() =>{
  console.log("MongoDB Connected")
}).catch((err) => console.log(err.message));

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
