const RecipeServices = require('../../services/recipes')

async function partialRenewal(req, res) {
  const recipe = await RecipeServices.partialRenewal(req.params.id, req.body);
  res.json(recipe)
}

module.exports = partialRenewal