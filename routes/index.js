const router = require("express").Router();


const plataformaModel = require("./plataforma");
router.use("/platforms", plataformaModel);

const yearModel = require("./year");
router.use("/year", yearModel);

const publisherModel = require("./publisher");
router.use("/publisher", publisherModel);

const generoModel = require("./genero");
router.use("/genre", generoModel);

const gamesModel = require("./games");
router.use("/games", gamesModel);

module.exports = router;
