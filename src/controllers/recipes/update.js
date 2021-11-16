const RecipesServices = require("../../services/recipes");

async function update(req, res) {
    const recipe = await RecipesServices.update(req.params.id, req.body);
  if (!recipe) {
    res.sendStatus(404);
  }
  return res.json(recipe);
}

module.exports = update;
