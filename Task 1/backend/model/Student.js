const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  major: String,
  GPA: Number,
});

module.exports = mongoose.model("students", studentSchema);
