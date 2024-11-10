const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RecipeModel = require('./models/Recipe');
const FavoriteMealModel = require("./models/FavoriteMeal");

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],  
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use(express.json());

mongoose.connect("mongodb://localhost/recipe");

app.post('/register', (req, res) => {
    RecipeModel.create(req.body).then(recipes => res.json(recipes)).catch(err => res.json(err));
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    RecipeModel.findOne({ email: email }).then(user => {
        if (user) {
            if (user.password === password) {
               
                res.json({ message: "Success", userId: user._id });
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    });
});


app.post("/addFavorite", async (req, res) => {
    const { email, mealId, mealName, mealImage } = req.body;
    console.log("Adding favorite:", req.body);  

    try {
        const newFavorite = new FavoriteMealModel({
            email,       
            mealId,
            mealName,
            mealImage,
        });

        await newFavorite.save();
        res.json({ message: "Meal added to favorites!" });
    } catch (error) {
        console.error("Error adding favorite:", error);
        res.status(500).json({ error: "Failed to add meal to favorites", details: error.message });
    }
});


app.get("/getFavorites/:email", async (req, res) => {
    try {
        const email = req.params.email;  
        console.log("Fetching favorites for email:", email);  
        const favorites = await FavoriteMealModel.find({ email });  

        if (!favorites || favorites.length === 0) {
            return res.status(404).json({ message: "No favorites found for this email" });
        }

        res.json(favorites);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch favorites" });
    }
});


const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
