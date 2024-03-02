import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    deault: false
  },
  topics: [{
    type: String
  }]
  
},{timestamps: true});

const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);

export default Session;
