const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: { type: ObjectId, ref: "users" },
});
const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;
