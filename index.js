const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const URL = process.env.URL

console.log(URL)

express()
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
