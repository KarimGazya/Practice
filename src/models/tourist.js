const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const touristSchema = new Schema(
  {
    mobileNumber: {
      type: String,
      required: true,
    },

    nationality: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    job: {
      type: String,
    },

    wallet: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

// Inherit User's schema
touristSchema.add(userSchema.obj);

const tourist = mongoose.model("tourist", touristSchema);
module.exports = tourist;
