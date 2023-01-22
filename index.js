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




app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
