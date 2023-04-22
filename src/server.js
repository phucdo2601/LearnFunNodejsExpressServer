import express from "express";
import configViewEngine from "./configs/viewEngine";
import * as dotenv from 'dotenv';
import initWebRoute from "./route/web";

dotenv.config()
const app = express();

//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

const port = process.env.PORT || 8080;
console.log(port);


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port} and htpp://localhost:${port}`);
});