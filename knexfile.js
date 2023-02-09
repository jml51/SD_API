// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
 
  client: 'postgresql',
  connection: {
    database: 'SD_API',
    user:     'postgres',
    password: '7754'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
