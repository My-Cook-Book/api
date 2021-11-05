import * as UsersServices from "../../services/users/index.js";

async function getAllUsers(req, res) {
  const users = await UsersServices.getAllUsers();
  res.json(users);
}
export default getAllUsers;
