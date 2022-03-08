const UsersServices = require("../../services/users");

async function uploadAvatar(req, res) {
  const users = await UsersServices.uploadAvatar(req.body);
  res.json(users);
}
module.exports = uploadAvatar;

