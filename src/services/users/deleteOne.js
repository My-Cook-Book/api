const User = require("../../db/models/User");

async function deleteOne(id) {
  const user = await User.findOneAndDelete(id);

  return user;
}

module.exports = deleteOne;
