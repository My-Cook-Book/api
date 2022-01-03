const Recipe = require("../../db/models/Recipe.js");


async function partialRenewal(id,body) {
  const recipes = await Recipe.updateOne( { _id: id}, body);
  return recipes;
}

module.exports = partialRenewal;