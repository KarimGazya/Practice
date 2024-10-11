const user = require("../models/users");

const CreateUser = async (req, res) => {
  try {
    await user.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
    });
    res.status(200).send("user created successfully!");
  } catch (e) {
    console.log(e);
    res.status(400).send("error");
  }
};

const getUser = async (req, res) => {
  const users = await user.findOne({ username: "mikha" });
  res.status(200).send(users);
};

const deleteAllusers = async (req, res) => {
  await user.deleteMany();
  res.status(200).send("all deleted");
};

module.exports = { CreateUser, getUser, deleteAllusers };
