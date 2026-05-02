const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    Type: String,
    unique: [true, "user Name is already exsist"],
    required: [true, "user name is required"],
  },
  email: {
    type: String,
    unique: [true, "email is already exsist"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    // default:"URL"
  },
});

const userModel = mongoose.model("insuser", userSchema);
module.exports = userModel;
