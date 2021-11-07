const UsersServices = require('../../services/users')

async function getById(req, res) {
  const user = await UsersServices.getById(req.params.id);
  if (!user) {
    res.sendStatus(404)
  }
  return res.json(user)
}

module.exports = getById
