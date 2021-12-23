const path = require("path");
const fs = require("fs");
const Recipe = require("../../db/models/Recipe.js");
const ObjectId = require("../../db/models/Recipe.js");

async function findOneAndDelete(id) {
  const recipe = await Recipe.findOneAndDelete({ _id: id });

  return recipe;
}

module.exports = findOneAndDelete;
