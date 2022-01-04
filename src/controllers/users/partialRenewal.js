const UsersServices = require('../../services/users')

async function partialRenewal(req, res) {
  const user = await UsersServices.partialRenewal(req.params.id, req.body);
<<<<<<< HEAD

  return res.json(user)
}

module.exports = partialRenewal
=======
  return res.json(user)
}

module.exports = partialRenewal
>>>>>>> 8d351b223b2fe0e73cd1d0042eaec29541951cd8
