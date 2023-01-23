const db = require('../data/db')



module.exports = {
   getAll: async (req, res) => {
        const platforms2 = await db('platforms')

        if (platforms2) {
            //cenario de sucesso
            return res.json({ success: true, data: platforms2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    
    insert: async (req, res) => {
        const platform = req.body;
        const platforms2 = await db("platforms").insert(platform);

        if (platforms2) {
            //cenario de sucesso
            return res.json({ success: true, data: platforms2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },

    delete : async (req, res) => {
        const platforms = req.body;
        const platforms2 = await db('platforms').where({ platforms }).del().returning('*')
        
        if (platforms2) {
            //cenario de sucesso
            return res.json({ success: true, data: platforms2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    }
}
