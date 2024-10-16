const express = require("express");
const router = express.Router();
const { createTourist } = require("../controllers/touristController");

// Define the POST route for creating a tourist
router.post("/create", createTourist);

module.exports = router;
