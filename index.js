const express = require('express')
const morgan = require('morgan')
const {parse} = require('csv-parse')
const fs = require('fs')


const db = require('./db')

const parser = parse({columns:true}, function (err, records){
  console.log(records);
});

fs.createReadStream(__dirname+'/vgsales.csv').pipe(parser);



const PORT = process.env.PORT || 5000
const app = express()



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', async (req, res) => {
  const users = await db.select().from('users')
  res.json(users)
})

app.post('/users', async (req, res) => {
  const user = await db('users').insert({ name: req.body.name }).returning('*')
  res.json(user)
})

app.delete('/users', async (req, res) => {
  const deletedUser = await db('users').where({ id: req.params.id }).del().returning('*');
  res.json(deletedUser);
});




app.get('/plataforma', async (req, res) => {
  const plataforma = await db.select().from('plataforma')
  res.json(plataforma)
});

app.post('/plataforma', async (req, res) => {
  const plataforma = await db('plataforma').insert({ plataforma: req.body.plataforma }).returning('*')
  res.json(plataforma)
})



app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
