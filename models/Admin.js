const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String // Store hashed password
});

module.exports = mongoose.model("Admin", AdminSchema);
