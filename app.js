const express = require("express");
const Logger = require("./Logger");
const Auth = require("./auth");
const dotenv = require("dotenv").config();
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
app.use(express.json());
app.use(Logger);
app.use(Auth);
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
const courses = [
  {
    id: 1,
    name: "html",
  },
  {
    id: 2,
    name: "js",
  },
];

//GET METHOD//
app.get("api/courses/:id", (req, res) => {
  const course = course.find((c) => c.id === parseInt(req.params.id));
  res.send(course);
});

//POST METHOD//
app.post("api/courses/:id", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("name is required");
    return;
  }
  if (app.get("env") === "development") {
    app.use(morgan("tiny"));
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//PUT METHOD//
app.put("api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return;
  res.status(404).send("course with given id not found");

  if (!req.body.name || req.body.length > 3)
    return res.status(400).send("name is require and more than 3 character");
  course.name = req.body.name;
  res.send(course);
});

//DELETE METHOD//
app.delete("api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return;
  res.status(404).send("course with given id not found");

  const index = course.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});



const Port = process.env.APP_PORT || 3000;
app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});
