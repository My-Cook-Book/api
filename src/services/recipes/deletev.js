const path = require("path");
const fs = require("fs");

async function deletev(id) {

  Model.deleteOne({ _id: id })

  const __dirname = path.resolve() + "/src";
  const recipes = fs.readFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    { encoding: "utf8" }
  );
  const parsedRecipes = JSON.parse(recipes);

  const indexRecipe = parsedRecipes.findIndex(
    (elem) => Number(elem.id) === Number(id)
  );
  parsedRecipes.splice(indexRecipe, 1);
  fs.writeFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    JSON.stringify(parsedRecipes)
  );

  return "ok";
}

module.exports = deletev;
