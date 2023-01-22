const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const plataforma = await db.select().from('plataforma')
        
        if (plataforma) {
            //cenario de sucesso
            return res.json({ success: true, data: plataforma });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    getById: async (req, res) => {
        const idplataforma = await db.select({where:{ id: req.body.id },}).from('plataforma')
        
        if (idplataforma) {
            //cenario de sucesso
            return res.json({ success: true, data: plataforma });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    insert: async (req, res) => {
        const postplataforma = await db('plataforma').insert({ plataforma: req.body.plataforma }).returning('*')
        
        if (postplataforma) {
            //cenario de sucesso
            return res.json({ success: true, data: plataforma });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    delete: async (req, res) => {
        const deletedplataforma = await db('plataforma').delete({where:{ id: req.body.id },}).returning('*');
        
        if (deletedplataforma) {
            //cenario de sucesso
            return res.json({ success: true, data: plataforma });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    }
}