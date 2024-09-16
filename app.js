const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());

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
app.get("api/courses/:id", (req, res) => {
  const course = course.find((c) => c.id === Number(req.params.id));
  res.send(course);
});

app.post("api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("name is required");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const Port = process.env.APP_PORT || 3000;
app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});
