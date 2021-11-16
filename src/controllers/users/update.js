const UsersServices = require("../../services/users");

async function update(req, res) {
   const user = await UsersServices.update(req.params.id, req.body);
  if (!user) {
    res.sendStatus(404);
  }
  return res.json(user);
}

module.exports = update;
