const RecipeServices = require('../../services/recipes')

async function partialRenewal(req, res) {
  const reciipe = await RecipesServices.partialRenewal(req.params.id, req.body);

  return res.json(recipe)
}

module.exports = partialRenewal