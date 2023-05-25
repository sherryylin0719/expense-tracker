const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const routes = require("./routes")
const app = express()
const PORT = 3000
require("./config/mongoose")
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}



app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Express is listening on localhost:${process.env.PORT}`)
})