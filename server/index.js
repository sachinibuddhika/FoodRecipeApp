const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const RecipeModel=require('./models/Recipe')

const app=express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],  
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  }));


mongoose.connect("mongodb://localhost/recipe");

app.post('/register',(req,res)=>{
RecipeModel.create(req.body).then(recipes=>res.json(recipes)).catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    RecipeModel.findOne({email:email}).then(
        user=>{
            if(user){
                if(user.password===password){
                    res.json("Success")
                }else{
                    res.json("The password is incorrect")
                }
            }else{
              res.json("No record existed")  
            }
        }
    )
})



app.listen(3001,()=>{
    console.log("server is running")
})