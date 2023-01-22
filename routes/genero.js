const generoModel = require("express").Router();
const controller = require("../controller/genero");

generoModel.get("/all",         controller.getAll);
generoModel.post("/post",       controller.insert);
generoModel.delete("/delete",   controller.delete);

module.exports = generoModel;