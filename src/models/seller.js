const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const sellerSchema = new Schema(
  {
    logo: {
      //img url will be saved
      type: String,
    },

    // id: { //type
    //     type: ,
    //     required: true
    // },

    // taxRegCard: { //what will documents be stored as
    //     type: ,
    //     required: true
    // },

    yearsOfExperience: {
      type: Number,
    },

    priorWork: {
      type: String,
    },

    name: {
      type: String,
    },

    description: {
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
// sellerSchema.add(userSchema.obj);

// const seller = mongoose.model("seller", sellerSchema);
const seller = User.discriminator("seller", sellerSchema);

module.exports = seller;
