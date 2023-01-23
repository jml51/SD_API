const yearModel = require("express").Router();
const controller = require("../controller/year");

yearModel.get("/all", controller.getAll);
yearModel.post("/post", controller.insert);
yearModel.delete("/delete", controller.delete);

module.exports = yearModel;