// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// serve static files from "public"
app.use(express.static("public"));

// example route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
