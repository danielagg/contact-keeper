const express = require("express");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authmiddleware");

const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

// api/contacts, from server.js
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.id }).sort({
      createdOn: -1 // sort by desc
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Could not fetch user's contacts" });
  }
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
