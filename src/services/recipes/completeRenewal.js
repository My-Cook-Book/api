const Recipe = require("../../db/models/Recipe.js");

async function completeRenewal(id, body) {
  const newData = {
    title: "",
    description: "",
    ...body,
  };
  const recipes = await Recipe.updateOne({ _id: id }, newData);

  return recipes;
}

module.exports = completeRenewal;
