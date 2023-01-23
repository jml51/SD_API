const gamesModel = require("express").Router();
const controller = require("../controller/games");

gamesModel.get("/all",         controller.getAll);
gamesModel.post("/post",       controller.insert);
gamesModel.delete("/delete",   controller.delete);
gamesModel.get("/getpublisher",   controller.getpublisher);
gamesModel.get("/getplatforms",   controller.getplatforms);
gamesModel.get("/getgenre",   controller.getgenre);
gamesModel.get("/getyear",   controller.getyear);

module.exports = gamesModel;