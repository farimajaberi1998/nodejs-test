const express = require("express");
const router = express.Router();
const courseController = require("../controller/courses-controller");


//GET METHOD//
router.get("/:id", courseController.getCourse);

router.get("/", courseController.getCourses);

//POST METHOD//
router.post("/", courseController.createCourse);

//PUT METHOD//
router.put("/:id", courseController.updateCourse);

//DELETE METHOD//
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
