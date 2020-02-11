const express = require("express");
const auth = require("../middleware/auth");
const agence = require("../middleware/agence");
const { User } = require("../models/user");

const router = express.Router();

// @route Get api/user
// @desc get the current user
// @ express Privat
router.get("/:id", auth, agence, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    res.json(user);
  } catch (ex) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
