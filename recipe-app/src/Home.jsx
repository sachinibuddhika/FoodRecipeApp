import React, { useState } from "react";
import FilterListToggle from "./FilterListToggle";
import Navbar from "./Navbar";
import MealCard from "./MealCard";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    1: { id: 1, value: "Chicken" },
    2: { id: 2, value: "Pasta" },
    3: { id: 3, value: "Seafood" },
    4: { id: 4, value: "Vegan" },
    5: { id: 5, value: "Dessert" },
  };

  const categoryArray = Object.values(categories);

  const foodsByCategory = {
    Chicken: [
      "Grilled Chicken",
      "Chicken Wings",
      "Chicken Salad",
      "Grilled Chicken",
      "Chicken Wings",
      "Chicken Salad",
    ],
    Pasta: ["Spaghetti", "Mac n Cheese", "Pasta Alfredo"],
    Seafood: ["Salmon", "Shrimp Cocktail", "Fish Tacos"],
    Vegan: ["Vegan Burger", "Tofu Stir Fry", "Vegan Pizza"],
    Dessert: ["Chocolate Cake", "Ice Cream", "Cupcakes"],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ backgroundColor: "#fef8f9", minHeight: "100vh" }}>
      <FilterListToggle
        options={categoryArray}
        value={selectedCategory}
        selectToggle={handleCategorySelect}
      />

      <div>
        {selectedCategory && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "50px 30px",
              padding: "20px",
              justifyItems: "center",
              marginLeft: "270px",
              marginRight: "270px",
              marginTop: "30px",
            }}
          >
            {foodsByCategory[selectedCategory]?.map((food, index) => (
              <MealCard key={index} mealName={food} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
