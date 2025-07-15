const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  progress: { type: Number, default: 0 }, // Progress percentage
  overallStats: {
    totalCourses: { type: Number, default: 0 },
    completedCourses: { type: Number, default: 0 }
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Statistics', statisticsSchema);
