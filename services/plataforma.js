const db = require('../knexfile')



module.exports = {

    getAll: async() => {
        return db.query(`
          SELECT
            *
          FROM 
            plataforma
        `).then(q => q.rows);
    },
}