const User = require("../../db/models/User.js");

async function uploadAvatar(body) {
    const user = await User.create(body);
    return user;
  }
  module.exports = uploadAvatar;