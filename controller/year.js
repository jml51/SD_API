const db = require('../data/db')



module.exports = {
   getAll: async (req, res) => {
        const year2 = await db('year')

        if (year2) {
            //cenario de sucesso
            return res.json({ success: true, data: year2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    
    insert :  async (req, res) => {
        const year = req.body;
        const year2 = await db("year").insert(year);

        if (year2) {
            //cenario de sucesso
            return res.json({ success: true });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },

   delete : async (req, res) => {
        const year = req.body.id;
        const year2 = await db('year').where({ year }).del().returning('*')
        
        if (year2) {
            //cenario de sucesso
            return res.json({ success: true, data: year2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    }
}
