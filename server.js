var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var PORT = 3000

var app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var routes = require('./controllers/game-controller.js')

app.use('/', routes)

app.listen(PORT, () => {
	console.log(`App listening on ${PORT}`)
})