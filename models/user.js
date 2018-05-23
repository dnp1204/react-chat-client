const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, minlength: 6 }
});

const user = mongoose.model("users", userSchema);
module.exports = user;
