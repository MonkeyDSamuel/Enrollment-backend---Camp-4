const Enrollment = require('../models/Enrollments');

exports.addEnrollments = async (req, res) => {
  const enroll = new Enrollment(req.body);
  await enroll.save();
  res.send(enroll);
};

exports.getEnrollments = async (req, res) => {
  const enrolls = await Enrollment.find().populate('Student_Id', 'Course_Id');
  res.send(enrolls);
};

exports.getEnrollment = async (req, res) => {
  const enroll = await Enrollment.findById(req.params.id);
  res.send(enroll);
};

exports.updateEnrollment = async (req, res) => {
  const enroll = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(enroll);
};

exports.deleteEnrollment = async (req, res) => {
  await Enrollment.findByIdAndDelete(req.params.id);
  res.send({ message: "Enrollment deleted" });
};