import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  id: String,
  name: String,
  color: String
});

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    name: String,
    image: String
  },
  tags: [tagSchema],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  category: {
    type: String,
    enum: ['Web', 'Crypto', 'Forensics', 'Pwn', 'Reverse', 'Misc'],
    required: true
  },
  images: [{
    url: String,
    caption: String
  }]
}, {
  timestamps: true
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema); 