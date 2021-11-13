const UsersServices = require("../../services/users");

async function create(req, res) {
  const users = await UsersServices.create(req.body);
  res.json(users);
}
module.exports = create;
