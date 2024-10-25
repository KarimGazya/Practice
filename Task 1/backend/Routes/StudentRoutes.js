const express = require("express");
const router = express.Router();

const {
  readStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../Controller/StudentController.js");

router.get("/readStudents", readStudents);
router.post("/createStudent", createStudent);
router.patch("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

module.exports = router;
