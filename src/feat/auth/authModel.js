const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  fullName: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const AuthModel = mongoose.model("Auth", AuthSchema);

module.exports = AuthModel
