import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

function MealCard({ mealName }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "150px",
        borderRadius: "10px",
        backgroundColor: "#f1f1f1",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontSize: "0.8rem",
              fontWeight: "normal",
            }}
          >
            {mealName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MealCard;
