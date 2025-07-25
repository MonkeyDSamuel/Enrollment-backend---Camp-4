const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  Title: {type: String, required: true},
  Description: String,
  Created_At: Date
});

module.exports = mongoose.model('Course', courseSchema);