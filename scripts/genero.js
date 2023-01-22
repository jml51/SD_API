const db = require('../knexfile')

;(async () => {
  try {
    await db.schema.dropTableIfExists('genero')
    await db.schema.withSchema('public').createTable('genero', (table) => {
      table.increments()
      table.string('genero')
    })
    console.log('Created genero table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()