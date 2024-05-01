const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const authRoute=require('./auth')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://varadprabhu:KLvpMj186FHmdkfe@cluster0.9rcsida.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const youtubeChannelSchema = new mongoose.Schema({
  imageurl: String,
  title: String,
  content: String,
  channelURL: String,
  initialLikes: Number
});

const YouTubeChannel = mongoose.model('YouTubeChannel', youtubeChannelSchema);

app.get('/api/youtubechannels', async (req, res) => {
  try {
    const channels = await YouTubeChannel.find();
    res.json(channels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// app.use("/api/auth",authRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

