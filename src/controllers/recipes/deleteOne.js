const RecipesServices = require("../../services/recipes");

async function deleteOne(req, res) {
  const recipe = await RecipesServices.deleteOne(req.params.id);
  if (!recipe) {
    res.sendStatus(404);
  }

  return res.json(recipe);
}

module.exports = deleteOne;
