const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const publisher = await db.select().from('publisher')
        
        if (publisher) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    getById: async (req, res) => {
        const idpublisher = await db.select({where:{ id: req.body.id },}).from('publisher')
        
        if (idpublisher) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    insert: async (req, res) => {
        const postpublisher = await db('publisher').insert({ publisher: req.body.publisher }).returning('*')
        
        if (postpublisher) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    delete: async (req, res) => {
        const deletedpublisher = await db('publisher').delete({where:{ id: req.body.id },}).returning('*');
        
        if (deletedpublisher) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    }
}