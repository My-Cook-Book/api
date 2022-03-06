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
author: { type: ObjectId, ref: "users", required: true },
  instructions: [{ type: ObjectId, ref: "instructions", required: true }],
  rating: {
    type: Number,
  },

  timeCook: {
    type: Number,
  },

  category: {
    type: String,
  },
  kitchen: [{ type: ObjectId, ref: "kitchen", required: true }],
  ingredients: [{ type: ObjectId, ref: "ingredients", required: true }],

  images: [{ type: String }],
});
const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;
