const express = require('express')
const morgan = require('morgan')
const {parse} = require('csv-parse')
const cors = require('cors');
const fs = require('fs')


const db = require('./knexfile')

const parser = parse({columns:true}, function (err, records){
  console.log(records);
});

fs.createReadStream(__dirname+'/vgsales.csv').pipe(parser);



const PORT = process.env.PORT || 5000
const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const router = require("./routes");
app.use("/api", router);


app.get('/genero2', async (req, res) => {
  const genero = await db.select().from('genero')
  res.json(genero)
});


app.get('/publisher2', async (req, res) => {
  const publisher = await db.select().from('publisher')
  res.json(publisher)
});



app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
