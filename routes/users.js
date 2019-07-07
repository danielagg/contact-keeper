const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
// const { check, validationResult } = require("express-validator/check");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// api/users, from server.js
router.post(
  "/",
  [
    check("name", "Please enter a name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // check validation first
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      // check whether user already exists in DB
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // save new user with hashed password
      user = User({ name, email, password });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("todo: User saved");
    } catch (ex) {
      console.error(ex.message);
      res.status(500).json({ msg: "Could not create user" });
    }
  }
);

module.exports = router;
