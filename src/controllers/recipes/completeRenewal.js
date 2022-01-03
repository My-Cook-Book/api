const RecipesServices = require("../../services/recipes");

async function completeRenewal(req, res) {
  const recipe = await RecipesServices.completeRenewal(req.params.id, req.body);

  return res.json(recipe);
}

module.exports = completeRenewal;
