// app.js (or any file where you initialize your Express application)

const express = require('express');
const mongoose = require('mongoose');
const Channel = require('./models/channel'); // Import the Channel model

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Define a route to insert a new channel into the database
app.post('/channels', async (req, res) => {
  try {
    // Create a new channel document using the Channel model
    const newChannel = new Channel({
      imageurl: 'url_of_image',
      title: 'Channel Title',
      content: 'Channel Content',
      channelURL: 'Channel URL',
      initialLikes: 0 // Initialize likes to 0
    });

    // Save the new channel document to the database
    const savedChannel = await newChannel.save();

    res.json(savedChannel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
