var express = require('express')
var app = express()
var session = require('express-session')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
// var env = require('dotenv').load()
var passport = require("passport")
var PORT = process.env.PORT || 3000
// var path = require('path')

var db = require('./models')

app.use(express.static("public"))


//BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//for passport
app.use(session({
  secret: 'hello world', 
  resave: true, 
  saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session()); //persistent login sessions

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Routing 
var htmlRoutes = require('./controllers/game-controller.js')
var apiRoutes = require('./controllers/api-controller.js')

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

//Models
var db = require('./models')

//Routes
var authRoute = require('./routes/auth.js')(app, passport);

//Passport strategies
require('./config/passport/passport.js')(passport, db.Users);

//Sync DB
db.sequelize.sync().then(function() {
    console.log("Nice! DB looks good")
    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}`)
    })
  }).catch(function(err) {
    console.log(err, "SOmething went wrong with the DB update")
});

// 404 error page
app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(__dirname + "/public/assets/404.html");
})

