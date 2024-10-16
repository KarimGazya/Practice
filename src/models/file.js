const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    ref: "user",
    required: true,
  }, // Reference to User
  fileType: {
    type: String,
    enum: ["idDoc", "taxRegCard", "certificates"],
    required: true,
  },
});

const file = mongoose.model("file", fileSchema);
module.exports = file;
