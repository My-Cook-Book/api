const Recipe = require("../../db/models/Recipe.js");

async function deleteOne(id) {
  const recipe = await Recipe.findOneAndDelete(id);

  return recipe;
}

module.exports = deleteOne;
