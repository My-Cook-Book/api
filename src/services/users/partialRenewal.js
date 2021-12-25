const User = require("../../db/models/User.js");

async function partialRenewal(id, body) {
  const users = await User.updateOne({ _id: id }, body);
  return users;
}

module.exports = partialRenewal;
