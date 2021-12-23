const RecipesServices = require("../../services/recipes");

async function deletOne(req, res) {
  const recipe = await RecipesServices.deletOne(req.params.id);
  if (!recipe) {
    res.sendStatus(404);
  }

  return res.json(recipe);
}

module.exports = deletOne;
