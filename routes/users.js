const express = require("express");

const router = express.Router();

// api/users, from server.js
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
