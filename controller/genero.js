const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const genero = await db.select().from('genero')
        
        if (genero) {
            //cenario de sucesso
            return res.json({ success: true, data: genero });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    getById: async (req, res) => {
        const idgenero = await db.select({where:{ id: req.body.id },}).from('genero')
        
        if (idgenero) {
            //cenario de sucesso
            return res.json({ success: true, data: genero });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    insert: async (req, res) => {
        const postgenero = await db('genero').insert({ genero: req.body.genero }).returning('*')
        
        if (postgenero) {
            //cenario de sucesso
            return res.json({ success: true, data: genero });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    delete: async (req, res) => {
        const deletedgenero = await db('genero').delete({where:{ id: req.body.id },}).returning('*');
        
        if (deletedgenero) {
            //cenario de sucesso
            return res.json({ success: true, data: genero });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    }
}