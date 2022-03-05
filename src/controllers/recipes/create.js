const RecipesServices = require("../../services/recipes");

async function create(req, res) {
  const recipes = await RecipesServices.create(req.body);
  res.status(200).json(recipes);
}
module.exports = create;
