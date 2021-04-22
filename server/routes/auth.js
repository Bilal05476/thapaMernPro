const express = require("express");
const router = express.Router();

require("../DB/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from Server");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: "Plz enter all fields" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      }
      const user = new User({ name, email, phone, work, password, cPassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "Successfully Registered" });
        })
        .catch((err) => res.status(500).json({ error: "Failed Registration" }));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
