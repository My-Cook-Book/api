const path = require("path");
const fs = require("fs");

async function update(id, body) {
    const __dirname = path.resolve() + "/src";
  const recipes = fs.readFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    { encoding: "utf8" }
  );
  const parsedRecipes = JSON.parse(recipes);

  const indexRecipe = parsedRecipes.findIndex(
    (elem) => Number(elem.id) === Number(id)
  );
  parsedRecipes[indexRecipe] = { ...parsedRecipes[indexRecipe], ...body };
  fs.writeFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    JSON.stringify(parsedRecipes)
  );
  return parsedRecipes[indexRecipe];
}

module.exports = update;
