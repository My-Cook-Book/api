const Recipe = require("../../db/models/Recipe.js");
const {ObjectId} = require('mongoose')


async function partialRenewal(id,body) {
  console.log(body);
  const recipes = await Recipe.updateOne( { _id: id}, body);
  
  return recipes;
}

module.exports = partialRenewal;