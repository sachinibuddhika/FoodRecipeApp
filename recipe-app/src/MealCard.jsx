import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import MealDetailsDialog from "./MealDetailsDialog";

function MealCard({
  mealName,
  mealImage,
  mealId,
  category,

  isFavoriteProp,
  disableFavoriteButton,
  sx,
}) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);
  const [openDialog, setOpenDialog] = useState(false);

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, lectus in bibendum malesuada, nisi magna auctor diam, id dapibus purus tortor ultrices felis. Donec fringilla euismod ipsum, non malesuada purus vulputate scelerisque. Sed fringilla, mi a porttitor efficitur, ipsum erat interdum diam, eget gravida dolor tellus non libero. ";

  const toggleFavorite = async () => {
    if (disableFavoriteButton) return;

    setIsFavorite(!isFavorite);
    console.log("Toggled favourite");

    const email = localStorage.getItem("email");

    if (!isFavorite && email) {
      try {
        const response = await axios.post("http://localhost:3001/addFavorite", {
          email,
          mealId,
          mealName,
          mealImage,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    }
  };

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          height: "150px",
          borderRadius: "10px",
          backgroundColor: "#f1f1f1",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          alt={mealName}
          image={mealImage}
          height="200"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Card>

      <CardContent sx={{ paddingTop: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "left" }}
          >
            {category}
          </Typography>
          <IconButton
            sx={{ padding: 0, color: "red" }}
            onClick={toggleFavorite}
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ fontSize: "17px" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "17px" }} />
            )}
          </IconButton>
        </div>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            textAlign: "left",
            fontSize: "14px",
            fontWeight: 500,
            marginTop: "4px",
          }}
        >
          {mealName}
        </Typography>
      </CardContent>

      <MealDetailsDialog
        open={openDialog}
        onClose={handleCloseDialog}
        meal={{
          mealName,
          mealImage,
          category,
          description,
        }}
      />
    </div>
  );
}

export default MealCard;
