const express = require("express");
const coursesRoute = require("./routes/courses-route")
const Logger = require("./Logger");
const Auth = require("./auth");
const dotenv = require("dotenv").config();
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const homeRoute = require("./routes/home-route")
app.use(express.json());
app.use(Logger);
app.use(Auth);
app.use(helmet());

app.use("/api/courses", coursesRoute)
app.use("/", homeRoute)

app.use(express.urlencoded({ extended: true }));


const Port = process.env.APP_PORT || 3000;
app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});
