// MealDetailsDialog.jsx
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
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={meal.mealImage}
            alt={meal.mealName}
            style={{ maxWidth: "300px", objectFit: "cover" }}
          />
        </div>

        <div
          sx={{
            textAlign: "left",
            fontSize: "14px",
          }}
        >
          <Typography variant="body1" paragraph>
            <strong>Meal Name: </strong>
            {meal.mealName}
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>Category: </strong>
            {meal.category}
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Description: </strong>
            {meal.description}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MealDetailsDialog;
