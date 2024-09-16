const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const Port = process.env.APP_PORT || 3000;

app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});
