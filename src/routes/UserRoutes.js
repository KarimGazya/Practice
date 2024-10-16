const express = require("express");
const router = express.Router();

//get the functions you want from the controllers folder
const {
  CreateUser,
  getUser,
  deleteAllusers,
  getUserById,
} = require("../controllers/UserController");
const verifyToken = require("../middleware/authMiddleware");

//example routes to test routing
//if you go to /api/UserRoutes/hello it will trigger this route
router.get("/hello", (req, res) => {
  res.json({ msg: "hello and this means the routhing works 1" });
});

//the :id is called a route parameter
// router.get("/:id", (req, res) => {
//   res.json({ msg: "hello and this means the routhing works 2" });
// });

//route to get all users
router.get("/getallusers", getUser);

//route to create a user
router.post("/createuser", CreateUser);

//route to get a user by putting the id in the params
router.get("/:id", getUserById);

router.delete("/deleteAll", deleteAllusers);

//to export the routes
module.exports = router;
