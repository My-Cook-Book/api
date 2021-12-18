const UsersServices = require("../../services/users");

async function deletev(req, res) {
  const user = await UsersServices.deletev(req.params.id);
  if (!user) {
    res.sendStatus(404);
  }
  return res.json(user);
}

module.exports = deletev;
