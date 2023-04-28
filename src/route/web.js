import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailsPage);

  router.get("/about", (req, res) => {
    res.send("I am Phuc Do!");
  });

  router.post("/create-new-user", homeController.createNewUser);

  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  return app.use("/", router);
};

export default initWebRoute;
