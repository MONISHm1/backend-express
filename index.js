import dotenv from 'dotenv'
import express from 'express'
dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/tweet",(req,res)=>{
    res.send("your tweet is here!")
})

app.get('/login', (req,res)=> {
    res.send("<h1> please login! </h1>")
})


app.listen(process.env.PORT, ()=>{
    console.log("app is listeining!")
})