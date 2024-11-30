const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    department: String,
    comments: String,
});

// Models
const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
