import * as RecipesServices from "../../services/recipes";

async function getAllRecipes(req, res) {
  const recipes = await RecipesServices.getAllRecipes();
  res.json(recipes);
}
export default getAllRecipes;
