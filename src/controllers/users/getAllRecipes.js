import * as UsersServices from "../../services/recipes/index.js";

async function getAllRecipes(req, res) {
  const recipes = await UsersServices.getAllRecipes();
  res.json(users);
}
export default getAllRecipes;
