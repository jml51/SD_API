const plataformaModel = require("express").Router();
const controller = require("../controller/plataforma");

plataformaModel.get("/all",         controller.getAll);
plataformaModel.post("/post",       controller.insert);
plataformaModel.delete("/delete",   controller.delete);

module.exports = plataformaModel;