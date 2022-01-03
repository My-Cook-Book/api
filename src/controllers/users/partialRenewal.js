const UsersServices = require('../../services/users')

async function partialRenewal(req, res) {
  const user = await UsersServices.partialRenewal(req.params.id, req.body);

  return res.json(user)
}

module.exports = partialRenewal