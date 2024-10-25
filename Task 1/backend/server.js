const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500; // .env file should have PORT
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Student = require("./Routes/StudentRoutes.js");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://karimgazya2003:oYPZGaHtsqj5eZAo@cluster0.l0x3g.mongodb.net/"
  )
  .then(() => {
    console.log(`Connected to DB http://localhost:${PORT}`);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => {
    console.error("Connection failed!", err);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.use("/Student", Student);
