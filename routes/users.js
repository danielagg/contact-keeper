const express = require("express");
const router = express.Router();

const User = require("../models/User");

// api/users, from server.js
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
