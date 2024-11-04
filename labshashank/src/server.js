const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');  // Import user routes

const app = express();
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // Enable CORS

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', {  // Replace with your own MongoDB URL
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);  // Use the userRoutes for user-related API

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
