const Tourist = require("../models/tourist");

// Create Tourist function
const createTourist = async (req, res) => {
  const {
    username,
    password,
    email,
    mobileNumber,
    nationality,
    dateOfBirth,
    job,
    wallet,
    role,
  } = req.body;

  try {
    // Ensure the role is manually set to 'Tourist' when creating a tourist
    if (role !== "Tourist") {
      return res.status(400).json({ message: "Invalid role for tourist" });
    }

    // Create a new tourist
    const newTourist = new Tourist({
      username,
      password, // You may want to hash the password here
      email,
      role, // Manually assign the role passed from the request
      mobileNumber,
      nationality,
      dateOfBirth,
      job,
      wallet,
    });

    // Save the tourist to the database
    const savedTourist = await newTourist.save();

    // Return the created tourist
    res
      .status(201)
      .json({ message: "Tourist created successfully", tourist: savedTourist });
  } catch (error) {
    // Handle errors (e.g., duplicate username/email)
    res
      .status(500)
      .json({ message: "Error creating tourist", error: error.message });
  }
};

module.exports = { createTourist };
