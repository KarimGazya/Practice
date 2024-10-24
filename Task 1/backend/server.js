const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500; //.env file should have PORT
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://mesogeorge2013:vgEeBjareDjLbjPM@acl.cxhds.mongodb.net/?retryWrites=true&w=majority&appName=ACL"
  )
  .then(() => {
    console.log(`Connected to DB http://localhost:${PORT}`);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//to read from json request
app.use(cors());
app.use(express.json());
