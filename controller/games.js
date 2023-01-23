const db = require('../data/db')



module.exports = {
   getAll: async (req, res) => {
        const games2 = await db('games')

        if (games2) {
            //cenario de sucesso
            return res.json({ success: true, data: games2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    
    insert :  async (req, res) => {
        const games = req.body;
        const games2 = await db("games").insert(games);

        if (games2) {
            //cenario de sucesso
            return res.json({ success: true, data:games2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },

    delete : async (req, res) => {
        const games = req.body;
        const games2 = await db('games').where({ games }).del().returning('*')
        
        if (games2) {
            //cenario de sucesso
            return res.json({ success: true, data: games2 });
        } else {
            //cenario de erro
            return res.json({ success: false });
        }
    },
    getpublisher : async (req, res) => {
        const games2 = await db('games')
            .join('publisher', 'publisher.publisher_id', 'games.id_games' )
            .select('games.id_games', 'publisher.publisher' )
            .where({publisher_id:id_games})
    },
    getplatforms : async (req, res) => {
        const games2 = await db('games')
            .join('platforms', 'platforms.platform_id', 'games.id_games' )
            .select('games.id_games', 'platform.platform' )
            .where({platforms_id:id_games})
    },
    getgenre : async (req, res) => {
        const games2 = await db('games')
            .join('genre', 'genre.genre_id', 'games.id_games' )
            .select('games.id_games', 'genre.genre' )
            .where({genre_id:id_games})
    },
    getyear : async (req, res) => {
        const games2 = await db('games')
            .join('year', 'year.year_id', 'games.id_games' )
            .select('games.id_games', 'year.year' )
            .where({year:id_games})
    }
}
