import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true, 
    unique: true
  },
  avatar: {
    type: String
  },
  about: {
    type: String
  },
  boards: {
    type: String
  },
  feeStructure: {
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verifyToken: {
    type: String
  },
  verifyTokenExpiry: {
    type: Date
  },
  goals: [{
    type: String
  }],

}, {timestamps: true});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;
