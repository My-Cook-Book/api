const fs = require("fs");
const path = require("path");
const Recipe = require("../../db/models/Recipe");

async function getAll() {
  const recipes = await Recipe.find();
  return recipes;
}

module.exports = getAll;
