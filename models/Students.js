const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {type:String, required: true},
  email: String,
  Created_At: {type:Date, default:Date.now}
});

module.exports = mongoose.model('Student', studentSchema);