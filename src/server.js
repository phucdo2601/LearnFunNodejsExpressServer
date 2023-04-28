import express from "express";
import configViewEngine from "./configs/viewEngine";
import * as dotenv from "dotenv";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
import connection from "./configs/connectDB";

dotenv.config();
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);
initAPIRoute(app);

const port = process.env.PORT || 8080;
console.log(port);

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} and htpp://localhost:${port}`
  );
});
