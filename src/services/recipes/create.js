const fs = require("fs");
const path = require("path");
const Recipe = require("../../db/models/Recipe.js");

async function create(body) {
  const newRecipe = await Recipe.create(body);
  return newRecipe;
}

module.exports = create;
