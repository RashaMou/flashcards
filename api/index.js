const express = require("express");

const router = express.Router();

// public routes
router.use("/users", require("./users"));

// private routes
// router.use("/decks", require("./decks"));
// router.use("/cards", require("./cards"));

module.exports = router;
