const UsersServices = require('../../services/users')

async function getAll(req, res) {
  const users = await UsersServices.getAll();
  res.json(users);
}

module.exports = getAll
