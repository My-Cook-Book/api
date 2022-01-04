const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");
const ObjectId = require("mongoose/lib/schema/objectid");

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
  rating: {
    type: Integer,
  },

  timeCook: {
    type: Integer,
  },

  category: {
    type: String,
  },
  Kichen: {
    type: ObjectId,
  },
  ingredients: [{type: String}],
  instruction: [{type: String}],
  images: [{type: String}],
});
const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;
