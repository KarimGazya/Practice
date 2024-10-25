const Student = require("../model/Student");

const createStudent = async (req, res) => {
  console.log("@o");
  const studentInfo = req.body;
  console.log(studentInfo);
  const newStudent = new Student(studentInfo);
  await newStudent.save();
  res.status(200).json(newStudent);
};

const readStudents = async (req, res) => {
  const students = await Student.find({});
  console.log(students);
  res.status(200).json(students);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  res
    .status(200)
    .json({ message: "Student updated successfully", student: updatedStudent });
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const updatedStudent = await Student.findByIdAndDelete(id);
  res
    .status(200)
    .json({ message: "Student deleted successfully", student: updatedStudent });
};

module.exports = { readStudents, createStudent, updateStudent, deleteStudent };
