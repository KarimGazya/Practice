const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      //required: true,
      unique: true,
    },

    role: {
      type: String,
      enum: [
        "Tourist",
        "Tour Guide",
        "Seller",
        "Advertiser",
        "Tourism Governor",
        "Admin",
      ],
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const user = mongoose.model("users", userschema);
module.exports = user;
