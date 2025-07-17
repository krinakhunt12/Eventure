const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.']
  },
  role: {
    type: String,
    enum: ['Student', 'Organizer', 'Admin'],
    default: 'Student',
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 