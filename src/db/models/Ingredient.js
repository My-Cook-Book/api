const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const IngredientSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
units: {
    type: String,
    required: true,
},
count: {
    type: Number,
    required: true,
},

});
const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;