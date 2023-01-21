const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'docker',
    password: '7754',
    database: 'docker',
  },
})

//docker compose up --build -d

//docker compose down

//docker exec sd_api2-server-1 npm run migrate
