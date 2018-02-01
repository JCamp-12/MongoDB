const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
})

const User = mongoose.model('user', UserSchema);
// User represents not one user, but all the users

module.exports = User;