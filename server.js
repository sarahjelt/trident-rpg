var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var PORT = 3000

var app = express()

var db = require('./models')

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var htmlRoutes = require('./controllers/game-controller.js')
var apiRoutes = require('./controllers/api-controller.js')

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

db.sequelize.sync().then(function() {
	app.listen(PORT, () => {
		console.log(`App listening on ${PORT}`)
	})	
})