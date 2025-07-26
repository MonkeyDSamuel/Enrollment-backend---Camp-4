const Course = require('../models/Courses');
const Enrollment = require('../models/Enrollments');

exports.addCourse = async (req, res) => {

  const cr = new Course(req.body);
  await cr.save();
  res.send(cr);
};

exports.getCourses = async (req,res) => {
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
  const cr = req.params.id;
  
  await Enrollment.updateMany({Course_Id: cr}, {$set: {Course_Id:null}});
  //To set 'ON DELETE SET NULL' on Enrollments collection when the course is deleted.
  await Course.findByIdAndDelete(cr);
  res.send({ message: "Course deleted" });
};