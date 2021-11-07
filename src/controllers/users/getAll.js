import * as UsersServices from "../../services/users/index.js";

async function getAll(req, res) {
  const users = await UsersServices.getAllUsers();
  res.json(users);
}
export default getAll;
