const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("mssg:Hello from berlin");
});

app.listen("3500", () => {
  console.log("Hello0");
});
