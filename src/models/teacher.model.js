import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({

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
  experties: [{
    type: String
  }],
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
  isTeacher: {
    type: Boolean,
    default: true
  },
  experienceDetails: {
    timeOfExperience: {
      type: String
    },
    achievements: [{
      type: String
    }]
  },
  capacity: {
    type: Number
  },
  menteesCount: {
    type: Number,
  },
  currentMentees: {
    type: Number
  },
  isFull: {
    type: Boolean,
    default: false
  },
  availability: [{
      type: String
  }]
}, {timestamps: true});

const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

export default Teacher;
