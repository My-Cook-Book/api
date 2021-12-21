const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;
