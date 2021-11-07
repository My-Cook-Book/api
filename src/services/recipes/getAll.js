const fs = require("fs");
const path = require("path");

async function getAll() {
  const __dirname = path.resolve() + "/src";
  const recipes = fs.readFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    { encoding: "utf8" }
  );
  const parsedRecipes = JSON.parse(recipes);
  return parsedRecipes;
}

module.exports = getAll;
