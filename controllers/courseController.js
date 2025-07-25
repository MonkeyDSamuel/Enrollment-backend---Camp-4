const Course = require('../models/Courses');

exports.addCourse = async (req, res) => {

  const cr = new Course(req.body);
  await cr.save();
  res.send(cr);
};

exports.getCourses = async (res) => {
  const crs = await Course.find();
  res.send(crs);
};

exports.getCourse = async (req, res) => {
  const cr = await Course.findById(req.params.id);
  res.send(cr);
};

exports.updateCourse = async (req, res) => {
  const cr = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(cr);
};

exports.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.send({ message: "Course deleted" });
};