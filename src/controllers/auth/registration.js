const authService = require('../../services/auth')

async function registration(req, res) {
  const user = await authService.registration(req.body)
  return res.json(user);
}

module.exports = registration