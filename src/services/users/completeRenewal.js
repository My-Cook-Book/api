const User = require("../../db/models/User.js");

async function completeRenewal(id, body) {
  const newData = {
    title: "",
    description: "",
    ...body,
  };
  const users = await User.updateOne({ _id: id }, newData);

  return users;
}

module.exports = completeRenewal;
