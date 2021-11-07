const RecipesServices = require("../../services/recipes");

async function getAll(req, res) {
  const recipes = await RecipesServices.getAll();
  res.json(recipes);
}
module.exports = getAll;
