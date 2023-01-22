const db = require('../knexfile')
;(async () => {
  try {
    await db.schema.dropTableIfExists('plataforma')
    await db.schema.withSchema('public').createTable('plataforma', (table) => {
      table.increments()
      table.string('plataforma')
    })
    console.log('Created plataforma table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
