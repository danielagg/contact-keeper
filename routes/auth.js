const express = require("express");

const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

// api/auth, from server.js
router.get("/", (req, res) => {
  res.send("Fetching logged in user");
});

// api/auth, from server.js
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please include a password").exists()
  ],
  async (req, res) => {
    // check validation first
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid email address" });
      }

      const doesPasswordMatch = await bcrypt.compare(password, user.password);

      if (!doesPasswordMatch) {
        return res.status(400).json({ msg: "Invalid password" });
      }

      const resPayload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        resPayload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (ex) {
      console.error(ex.message);
      return res.status(500).json({ msg: "Cannot login" });
    }
  }
);

module.exports = router;
