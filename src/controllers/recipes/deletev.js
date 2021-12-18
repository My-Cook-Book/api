const RecipesServices = require("../../services/recipes");

async function deletev(req, res) {
    const recipe = await RecipesServices.deletev(req.params.id);
  if (!recipe) {
    res.sendStatus(404);
  }
  return res.json(recipe);
}

module.exports = deletev;
