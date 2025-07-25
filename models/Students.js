const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {type:String, required: true},
  email: String,
  Created_At: Date
});

module.exports = mongoose.model('Student', studentSchema);