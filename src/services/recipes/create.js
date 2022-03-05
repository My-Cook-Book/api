const Recipe = require("../../db/models/Recipe.js");

async function create(body) {
  const newRecipe = await Recipe.create({ title: body.title, description: body.description});
  return newRecipe;
 
}

module.exports = create;
