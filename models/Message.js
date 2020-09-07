const mongoose = require('mongoose');

const Messages = new mongoose.Schema({
  room: String,
  user: String,
  date: { type: Date, default: Date.now },
});

module.exports = Message = mongoose.model('message', Messages);
