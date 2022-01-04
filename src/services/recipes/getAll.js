const fs = require("fs");
const path = require("path");
const Recipe = require("../../db/models/Recipe");

async function getAll() {
  const recipes = await Recipe
  .find()
  //.populate( 'author')
  return recipes;
}

module.exports = getAll;
