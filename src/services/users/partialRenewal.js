const User = require("../../db/models/User.js");

<<<<<<< HEAD

async function partialRenewal(id,body) {
  const users = await User.updateOne( { _id: id}, body);
=======
async function partialRenewal(id, body) {
  const users = await User.updateOne({ _id: id }, body);
>>>>>>> 8d351b223b2fe0e73cd1d0042eaec29541951cd8
  return users;
}

module.exports = partialRenewal;
