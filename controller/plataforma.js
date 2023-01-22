const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const plataforma = await db.select().from('plataforma')
        res.json(plataforma)
    },
    getById: async (req, res) => {
        const plataforma = await db.select({where:{ id: req.body.id },}).from('plataforma')
        res.json(plataforma)
    },
    insert: async (req, res) => {
        const plataforma = await db('plataforma').insert({ plataforma: req.body.plataforma }).returning('*')
        res.json(plataforma)
    },
    delete: async (req, res) => {
        const deletedplataforma = await db('plataforma').delete({where:{ id: req.body.id },}).returning('*');
        res.json(deletedplataforma);
    }
}