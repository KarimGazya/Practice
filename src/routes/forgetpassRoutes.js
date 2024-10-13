const express = require("express");
const router = express.Router();
const {
  generateAndSendOtp,
  verifyOtp,
  resetPassword,
} = require("../controllers/forgetpassController");

router.post("/generate&sendOTP", generateAndSendOtp);
router.post("/verifyOTP", verifyOtp);
router.put("/resetpassword", resetPassword);

module.exports = router;
