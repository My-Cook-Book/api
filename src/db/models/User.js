const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{ type: String, ref: "Role" }],

  lastName: {
    type: String,
    default: "отсутствует",
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  avatar: {
    type: String,
    default: "отсутствует",
  },
});
const User = mongoose.model("users", UserSchema);

module.exports = User;
