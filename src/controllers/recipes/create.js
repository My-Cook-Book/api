const RecipesServices = require("../../services/recipes");

async function create(req, res) {
  const recipes = await RecipesServices.create(req.body);
  res.json(recipes);
}
module.exports = create;
