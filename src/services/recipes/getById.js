const path = require("path");
const fs = require("fs");

async function getById(id) {
  const __dirname = path.resolve() + "/src";
  const recipes = fs.readFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    { encoding: "utf8" }
  );
  const parsedRecipes = JSON.parse(recipes);

  const recipe = parsedRecipes.find((elem) => elem.id === Number(id));

  return recipe;
}

module.exports = getById;
