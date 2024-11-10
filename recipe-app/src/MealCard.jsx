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

function MealCard({ mealName, mealImage, mealId, category, userId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
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
    </div>
  );
}

export default MealCard;
