const User = require("../models/users");
//take care of the reference of user and make sure that you can differentiate between user the variable and user the model
const mongoose = require("mongoose");
//i imported this to use it to check if the id is the same format as the id created by mongoose

//to create a new user using the data we got from the request body
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
    res.status(400).send("error creating a user");
  }
};

//get user by using username for example
//because it is a get request we have to use req.query/req.param instead of req.body to get the data from the frontend
const getUser = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

//this is used to delete all the user table
const deleteAllusers = async (req, res) => {
  await User.deleteMany();
  res.status(200).send("all users are deleted");
};

//to get a user by his id
const getUserById = async (req, res) => {
  const { id } = req.params;

  //to check if the id is the right format so mongoose won't throw an error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "the format of the id is not correct" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "there is no user for this id" });
  }
  res.status(200).json(user);
};

//export the functions so that you can use them elsewhere
module.exports = { CreateUser, getUser, deleteAllusers, getUserById };
