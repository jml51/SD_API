const db = require('../db')

;(async () => {
  try {
    await db.schema.dropTableIfExists('publisher')
    await db.schema.withSchema('public').createTable('publisher', (table) => {
      table.increments()
      table.string('publisher')
    })
    console.log('Created publisher table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
