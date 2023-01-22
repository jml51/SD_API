const publisherModel = require("express").Router();
const controller = require("../controller/publisher");

publisherModel.get("/all",         controller.getAll);
publisherModel.post("/post",       controller.insert);
publisherModel.delete("/delete",   controller.delete);

module.exports = publisherModel;