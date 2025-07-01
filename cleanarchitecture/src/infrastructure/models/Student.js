const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  email: String
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);