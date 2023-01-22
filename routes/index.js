const router = require("express").Router();



const plataformaModel = require("./plataforma");
router.use("/plataforma", plataformaModel);


module.exports = router;
