const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // Replace with your Angular app's origin
// app.use(cors());
app.use(cors({ origin: "http://localhost:8000" }));
app.get("/", (req, res) => {
  res.send("Welcome to CORS server! 😁");
});
app.get("/candy", (req, res) => {
  res.json({ candy: "bubble-gum", name: "charan" });
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
