const express = require("express");

const router = express.Router();

// api/contacts, from server.js
router.get("/", (req, res) => {
  res.send("Get all user contacts");
});

// api/contacts, from server.js
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// api/contacts, from server.js
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// api/contacts, from server.js
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
