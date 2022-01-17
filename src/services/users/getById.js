const User = require("../../db/models/User.js");


async function getById(id) {
  const users = await User.findById(id);
  return users;
}

module.exports = getById;
