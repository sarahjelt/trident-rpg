var express = require('express')
var session = require('express-session')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 3000
var passport = require("passport")


var app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(session({secret: 'hello world', resave: true, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())

var routes = require('./controllers/game-controller.js')

app.use('/', routes)

app.listen(PORT, () => {
	console.log(`App listening on ${PORT}`)
})