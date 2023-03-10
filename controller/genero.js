const db = require('../data/db')



module.exports = {
   getAll: async (req, res) => {
        const genre2 = await db('genre')

        if (genre2) {
            //cenario de sucesso
            return res.json({ success: true, data: genre2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    
    insert :  async (req, res) => {
        const genre = req.body;
        const genre2 = await db("genre").insert(genre);

        if (genre2) {
            //cenario de sucesso
            return res.json({ success: true, data:genre2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },

    delete : async (req, res) => {
        const genre = req.body;
        const genre2 = await db('genre').where({ genre }).del().returning('*')
        
        if (genre2) {
            //cenario de sucesso
            return res.json({ success: true, data: genre2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    }
}
