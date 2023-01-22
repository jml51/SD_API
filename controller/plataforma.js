const services = require("../services");

module.exports = {
  getAll: async (req, res) => {
    return services.recipes.getAll().then((recipes) => res.status(200).send(recipes));
  },
  getById: async (req, res) => {
    const idplataforma = await db
      .select({ where: { id: req.body.id } })
      .from("plataforma");

    if (idplataforma) {
      //cenario de sucesso
      return res.json({ success: true, data: idplataforma });
    } else {
      //cenario de erro
      return res.json({ success: false });
    }
  },
  insert: async (req, res) => {
    const postplataforma = await db("plataforma")
      .insert({ plataforma: req.body.plataforma })
      .returning("*");

    if (postplataforma) {
      //cenario de sucesso
      return res.json({ success: true, data: postplataforma });
    } else {
      //cenario de erro
      return res.json({ success: false });
    }
  },
  delete: async (req, res) => {
    const deletedplataforma = await db("plataforma")
      .delete({ where: { id: req.body.id } })
      .returning("*");

    if (deletedplataforma) {
      //cenario de sucesso
      return res.json({ success: true, data: deletedplataforma });
    } else {
      //cenario de erro
      return res.json({ success: false });
    }
  },
};
