const db = require('../data/db')



module.exports = {
   getAll: async (req, res) => {
        const publisher = await db('publisher')

        if (publisher) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    
    insert :  async (req, res) => {
        const publisher = req.body;
        const publisher2 = await db("publisher").insert(publisher);

        if (publisher2) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },

    delete : async (req, res) => {
        const publisher = req.body.id;
        const publisher2 = await db('publisher').where({ publisher }).del().returning('*')
        
        if (publisher2) {
            //cenario de sucesso
            return res.json({ success: true, data: publisher2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    }
}
