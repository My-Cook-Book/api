const User = require("../../db/models/User.js");

async function completeRenewal(id, body) {
  const newData = {
<<<<<<< HEAD
    title: "",
    description: "",
    ...body,
  };
  const users = await User.updateOne({ _id: id }, newData);

=======
    name: '',
    lastName: '',
    ...body
  };
  const users = await User.updateOne({ _id: id }, newData);
>>>>>>> 8d351b223b2fe0e73cd1d0042eaec29541951cd8
  return users;
}

module.exports = completeRenewal;
