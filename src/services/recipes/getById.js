const path = require("path");
const fs = require("fs");
const Recipe = require("../../db/models/Recipe.js");
const ObjectId = require("../../db/models/Recipe.js");

async function getById(id) {
  const recipe = await Recipe.findById({_id: id });
  return recipe;
}

module.exports = getById;
