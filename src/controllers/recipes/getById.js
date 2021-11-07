const RecipesServices = require("../../services/recipes");

async function getById(req, res) {
  const recipe = await RecipesServices.getById(req.params.id);
  if (!recipe) {
    res.sendStatus(404);
  }
  return res.json(recipe);
}

module.exports = getById;
