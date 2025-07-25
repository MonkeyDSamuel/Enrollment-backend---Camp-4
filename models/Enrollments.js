const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  Student_Id:{type: mongoose.Schema.Types.ObjectId, ref:'Student'},
  Course_Id:{type: mongoose.Schema.Types.ObjectId, ref:'Course'},
  Enrolled_On: Date
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);