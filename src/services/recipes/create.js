const fs = require("fs");
const path = require("path");

async function create(body) {
  body.id = body.length + 1;
  const __dirname = path.resolve() + "/src";
  const recipes = fs.readFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    { encoding: "utf8" }
  );
  const parsedRecipes = JSON.parse(recipes);
  parsedRecipes.push(body);
  fs.writeFileSync(
    __dirname + "/services/recipes" + "/recipes.json",
    JSON.stringify(parsedRecipes)
  );
  console.log(body);

  return parsedRecipes;
}

module.exports = create;
