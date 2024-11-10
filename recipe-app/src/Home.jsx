import React, { useState, useEffect } from "react";
import FilterListToggle from "./FilterListToggle";
import MealCard from "./MealCard";
import { CircularProgress, Typography } from "@mui/material";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Chicken");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = {
    1: { id: 1, value: "Chicken" },
    2: { id: 2, value: "Pasta" },
    3: { id: 3, value: "Seafood" },
    4: { id: 4, value: "Vegan" },
    5: { id: 5, value: "Dessert" },
  };

  const categoryArray = Object.values(categories);

  const fetchMeals = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchMeals(selectedCategory);
    }
  }, [selectedCategory]);

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

      <div style={{ margin: "30px auto", textAlign: "center" }}>
        {loading && <CircularProgress />}
        {error && (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        )}{" "}
        {meals.length > 0 && (
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
            {meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                mealName={meal.strMeal}
                mealImage={meal.strMealThumb}
                mealId={meal.idMeal}
                category={selectedCategory}
              />
            ))}
          </div>
        )}
        {meals.length === 0 && !loading && !error && (
          <Typography variant="h6" color="textSecondary">
            No meals found for the selected category.
          </Typography>
        )}
      </div>
    </div>
  );
}

export default Home;
