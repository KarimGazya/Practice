const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const advertiserSchema = new Schema(
  {
    websiteLink: {
      type: String,
    },

    hotline: {
      type: Number,
    },

    companyProfile: {
      //is this a link or a  decription? in both cases a String
      type: String,
    },

    logo: {
      //img url will be saved
      type: String,
    },

    status: {
      type: String,
      enum: ["Accepted", "Pending", "Rejected"],
      default: "Pending",
    },
    profile: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

// Inherit User's schema
// advertiserSchema.add(userSchema.obj);

// const advertiser = mongoose.model("advertiser", advertiserSchema);
const advertiser = User.discriminator("advertiser", advertiserSchema);

module.exports = advertiser;
