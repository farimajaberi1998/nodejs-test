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
const getCourse = (req, res) => {
  const course = course.find((c) => c.id === parseInt(req.params.id));
  res.send(course);
};

const getCourses = (req, res) => {
  res.send(["react", "nextjs", "js"]);
};

const createCourse = (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("name is required");
    return;
  }
  if (router.get("env") === "development") {
    router.use(morgan("tiny"));
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
};

const updateCourse = (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return;
    res.status(404).send("course with given id not found");
  
    if (!req.body.name || req.body.length > 3)
      return res.status(400).send("name is require and more than 3 character");
    course.name = req.body.name;
    res.send(course);
  }

  const deleteCourse = (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return;
    res.status(404).send("course with given id not found");
  
    const index = course.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }

module.exports = {
  getCourse,
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse
};
