import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";
import MealCard from "./MealCard";

function Favourite({ userId }) {
  console.log(userId);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log("Email from localStorage:", email);
    if (!email) {
      console.log("User is not logged in");
      return;
    }

    axios
      .get(`http://localhost:3001/getFavorites/${email}`)
      .then((response) => {
        console.log("Favorites:", response.data);
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching favorites:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div>
      <Box sx={{ padding: 4, marginLeft: "275px", marginRight: "275px" }}>
        {favorites.length === 0 ? (
          <Typography variant="body1">
            You don't have any favorites yet.
          </Typography>
        ) : (
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "flex-start",
            }}
          >
            {favorites.map((favorite) => (
              <Grid
                item
                key={favorite.mealId}
                sx={{
                  width: "calc(100% / 5 )",
                  maxWidth: "250px",
                }}
              >
                <MealCard
                  mealName={favorite.mealName}
                  mealImage={favorite.mealImage}
                  mealId={favorite.mealId}
                  category={favorite.category}
                  userId={favorite.userId}
                  isFavoriteProp={true}
                  disableFavoriteButton={true}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default Favourite;
