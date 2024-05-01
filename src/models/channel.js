// YouTube Channels

const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  imageurl: String,
  title: String,
  content: String,
  channelURL: String,
  initialLikes: Number
});

module.exports = mongoose.model('Channel', channelSchema);
