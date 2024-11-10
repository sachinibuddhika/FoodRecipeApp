const mongoose = require("mongoose");

const FavoriteMealSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to user
  mealId: String, // Meal ID from the API
  mealName: String,
  mealImage: String,
});

const FavoriteMealModel = mongoose.model("FavoriteMeal", FavoriteMealSchema);

module.exports = FavoriteMealModel;