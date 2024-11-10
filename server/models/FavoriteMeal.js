const mongoose = require("mongoose");

const FavoriteMealSchema = new mongoose.Schema({
  email: { type: String, required: true },
  mealId: { type: Number, required: true },
  mealName: { type: String, required: true },
  mealImage: { type: String, required: true },
  
});

const FavoriteMealModel = mongoose.model("FavoriteMeal", FavoriteMealSchema);

module.exports = FavoriteMealModel;