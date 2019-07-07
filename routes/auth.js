const express = require("express");

const router = express.Router();

// api/auth, from server.js
router.get("/", (req, res) => {
  res.send("Fetching logged in user");
});

// api/auth, from server.js
router.post("/", (req, res) => {
  res.send("Authorize user and get JWT token");
});

module.exports = router;
