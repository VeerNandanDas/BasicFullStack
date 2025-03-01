import express from 'express';
const app = express();

const PORT= process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("here you will get jokes if You go to /jokes")
});

app.get("/",(req,res)=>{
    res.send("here you will get jokes if You go to /jokes")
});

app.listen((PORT),()=>{
    console.log(`Server is running on port ${PORT}`);
 });
