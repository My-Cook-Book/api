const authService = require('../../services/auth')

async function login(req, res) {
  const authData = await authService.login(req.body)
  return res.json(authData);
}

module.exports = login
