import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  ctfName: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  challengeName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Web', 'Crypto', 'Forensics', 'Pwn', 'Reverse', 'Misc'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  solvedDate: {
    type: Date,
    default: Date.now
  },
  writeupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost',
    required: false
  }
}, {
  timestamps: true
});

export default mongoose.models.Achievement || mongoose.model('Achievement', achievementSchema); 