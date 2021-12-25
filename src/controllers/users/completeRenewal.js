const UsersServices = require('../../services/users')

async function partialRenewal(req, res) {
  const user = await UsersServices.completeRenewal(req.params.id, req.body);
  return res.json(user)
}

module.exports = partialRenewal
