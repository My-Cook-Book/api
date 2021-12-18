const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "отсутствует",
  },
});
const User = mongoose.model("users", UserSchema);

module.exports = User;
