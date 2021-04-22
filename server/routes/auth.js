const express = require("express");
const router = express.Router();

require("../DB/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World");
});

//Promises Method, Callback Hell
// router.post("/register",(req, res) => {
//   const { name, email, phone, work, password, cPassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cPassword) {
//     return res.status(422).json({ error: "Plz enter all fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cPassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "Successfully Registered" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed Registration" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Async, await Method
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: "Enter all fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    const user = new User({ name, email, phone, work, password, cPassword });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "Successfully Registered" });
    } else {
      res.status(500).json({ error: "Failed Registration" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Enter all fields" });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ error: "User Error" });
    } else {
      res.status(200).json({ message: "Login Success" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
