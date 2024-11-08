const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);  // Export the User model
