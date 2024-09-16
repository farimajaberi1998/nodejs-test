const express = require("express");
const dotenv = require("dotenv").config();
const app = express();


app.get("/api/courses/", (req, res) => {
  res.send(['reactjs','nextjs','nodejs']);
});

const Port = process.env.APP_PORT || 3000;
app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});
