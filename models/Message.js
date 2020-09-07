const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  room: String,
  user: String,
  message: String,
  date: { type: Date, default: Date.now },
});

module.exports = Message = mongoose.model('message', messageSchema);
