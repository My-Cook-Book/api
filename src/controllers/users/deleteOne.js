const UsersServices = require("../../services/users");

async function deleteOne(req, res) {
  const user = await UsersServices.deleteOne(req.params.id);
  if (!user) {
    res.sendStatus(404);
  }
  return res.json(user);
}

module.exports = deleteOne;
