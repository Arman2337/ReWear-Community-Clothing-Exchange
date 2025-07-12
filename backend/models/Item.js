const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  type: String,       // e.g., Men, Women, Kids
  size: String,
  condition: String,
  tags: [String],
  imagePath: String,   // local path of uploaded image
  status: {
    type: String,
    enum: ['available', 'swapped', 'pending'],
    default: 'available'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
