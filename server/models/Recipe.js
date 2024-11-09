const mongoose=require('mongoose')

const RecipeSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:String,
    password:String
})

const RecipeModel=mongoose.model("recipes",RecipeSchema)
module.exports=RecipeModel