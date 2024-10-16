const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const tourguideSchema = new Schema(
  {
    photo: {
      type: String,
    },

    // id: { //type
    //     type: ,
    //     required: true
    // },

    // certificates: { //document type
    //   type: ,
    //   required: true
    // },

    yearsOfExperience: {
      type: Number,
    },

    priorWork: {
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
// tourguideSchema.add(userSchema.obj);

// const tourguide = mongoose.model("tourguide", tourguideSchema);
const tourguide = User.discriminator("tourguide", tourguideSchema);

module.exports = tourguide;
