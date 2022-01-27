const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

//get request brings data from backend to frontend
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
