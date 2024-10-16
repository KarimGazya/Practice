const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500; //.env file should have PORT
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
//import the routes here
const UserRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/authRoutes");
const forget = require("./routes/forgetpassRoutes");
const touristRoutes = require("./routes/touristRoutes");

app.get("/test", (req, res) => {
  //root directory accessed then callback function
  res.send("Hello world");
});
//app listens to this port
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

mongoose
  .connect(
    "mongodb+srv://mesogeorge2013:vgEeBjareDjLbjPM@acl.cxhds.mongodb.net/?retryWrites=true&w=majority&appName=ACL"
  )
  .then(() => {
    console.log(`Connected to DB http://localhost:${PORT}`);
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//to read from json request
app.use(cors());
app.use(express.json());

//use the routes created in the routes folder and use it through the path /api/UserRoutes
app.use("/api/UserRoutes", UserRoutes);
app.use("/api/touristRoutes", touristRoutes);

//use the routes created for authentication
app.use("/api/auth", authRoutes);
app.use("/api/forget", forget);

//was testing and i moved it to the routes
// app.post("/createUser", CreateUser);
// app.get("/getUsers", getUser);
// app.delete("/deleteAllusers", deleteAllusers);
