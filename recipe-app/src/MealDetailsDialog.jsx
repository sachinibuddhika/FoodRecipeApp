import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

function MealDetailsDialog({ open, onClose, meal }) {
  if (!meal) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{meal.strMeal}</DialogTitle>
      <DialogContent>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={{ width: "100%", marginBottom: "16px" }}
        />

        <Typography variant="body1" paragraph>
          <strong>Category:</strong> {meal.strCategory || "N/A"}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Area:</strong> {meal.strArea || "N/A"}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Meal ID:</strong> {meal.idMeal}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Description:</strong> This is a <em>delicious</em> meal
          perfect for any occasion. The combination of flavors is simply
          irresistible! You can enjoy it for dinner or lunch, with a refreshing
          side salad.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Ingredients:</strong>
          <ul>
            {[...Array(20).keys()].map((i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];
              if (!ingredient || ingredient === "") return null;
              return (
                <li key={i}>
                  {measure} {ingredient}
                </li>
              );
            })}
          </ul>
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Instructions:</strong>{" "}
          {meal.strInstructions || "No instructions available."}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MealDetailsDialog;
