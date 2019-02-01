const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//use the Schema class to create our recipe schema object
// the schema is the structure of documents in the model's collection
const recipeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: [{ type: String }],
  cuisine: { type: String, required: true },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", " Drink", "Dessert", "Other"]
  },

  image: {
    type: String,
    default: " https://images.media-allrecipes.com/images/75131.jpg"
  },

  duration: { type: Number, min: 0 },

  creator: { type: String },
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;