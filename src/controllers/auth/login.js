const authService = require('../../services/auth')

async function login(req, res) {
  const user = await authService.login(req.body)
  return res.json(user);
}

module.exports = login