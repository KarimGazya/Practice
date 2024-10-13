const User = require("../models/users");
const nodemailer = require("nodemailer");
//require("dotenv").config();

// Configuring nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "funtimesmail098@gmail.com",
    pass: "ybbo rxau mvkk rkds",
  },
});

// In-memory store for OTPs
let OTPStore = {};

// Helper function to generate a 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// 1. Generate and send OTP, store it in memory
const generateAndSendOtp = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !user.email) {
      return res.status(404).json({ msg: "User not found or email missing" });
    }

    // Generate a random OTP
    const otp = generateOTP();

    // Store OTP with expiry time (10 minutes)
    OTPStore[username] = { otp, expiresIn: Date.now() + 10 * 60000 };

    // Send OTP to user's email
    await transporter.sendMail({
      from: "funtimesmail098@gmail.com",
      to: user.email,
      subject: "Password Reset OTP",
      text: `Your OTP for resetting your password is ${otp}`,
    });

    res.status(200).json({ msg: "OTP sent to your registered email." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error while sending OTP" });
  }
};

// 2. Verify OTP from input and compare with the stored OTP
const verifyOtp = async (req, res) => {
  const { username, otp } = req.body;

  try {
    // Check if OTP is valid and not expired
    const storedOtpData = OTPStore[username];
    if (
      !storedOtpData ||
      storedOtpData.otp !== otp ||
      Date.now() > storedOtpData.expiresIn
    ) {
      return res.status(400).json({ msg: "Invalid or expired OTP" });
    }

    // OTP is valid, clear it from the store after successful verification
    delete OTPStore[username];

    res.status(200).json({
      msg: "OTP verified successfully. Proceed to reset your password.",
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error during OTP verification" });
  }
};

// 3. Reset password after OTP is verified
const resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    res.status(200).json({ msg: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error while resetting the password" });
  }
};

module.exports = {
  generateAndSendOtp,
  verifyOtp,
  resetPassword,
};
