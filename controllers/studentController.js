const Student = require('../models/Students');

exports.addStudent = async (req, res) => {

  const stud = new Student(req.body);
  await stud.save();
  res.send(stud);
};

exports.getStudents = async (req,res) => {
  const studs = await Student.find();
  res.send(studs);
};

exports.getStudent = async (req, res) => {
  const stud = await Student.findById(req.params.id);
  res.send(stud);
};

exports.updateStudent = async (req, res) => {
  const stud = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(stud);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: "Student deleted" });
};
