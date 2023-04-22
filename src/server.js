import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();

configViewEngine(app);

const port = 8080;
app.get('/', (req, res) =>{
   res.render("index.ejs");
});

app.get('/about', (req, res) =>{
    res.send("I am Phuc Do!");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port} and htpp://localhost:${port}`);
});