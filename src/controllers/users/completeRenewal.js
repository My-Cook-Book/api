<<<<<<< HEAD
const UsersServices = require("../../services/users");

async function completeRenewal(req, res) {
  const user = await UsersServices.completeRenewal(req.params.id, req.body);

  return res.json(user);
}

module.exports = completeRenewal;
=======
const UsersServices = require('../../services/users')

async function partialRenewal(req, res) {
  const user = await UsersServices.completeRenewal(req.params.id, req.body);
  return res.json(user)
}

module.exports = partialRenewal
>>>>>>> 8d351b223b2fe0e73cd1d0042eaec29541951cd8
