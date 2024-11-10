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
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    });
});

app.post("/addFavorite", async (req, res) => {
    const { userId, mealId, mealName, mealImage } = req.body;
    try {
        const newFavorite = new FavoriteMealModel({
            userId,
            mealId,
            mealName,
            mealImage,
        });
        await newFavorite.save();
        res.json({ message: "Meal added to favorites!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add meal to favorites" });
    }
});

app.get("/getFavorites/:userId", async (req, res) => {
    try {
        const favorites = await FavoriteMealModel.find({ userId: req.params.userId });
        res.json(favorites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch favorites" });
    }
});

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
