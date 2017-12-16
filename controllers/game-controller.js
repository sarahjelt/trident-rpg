var express = require('express')
var router = express.Router()
var db = require('../models')
// var app = express()
// var path = require('path')

// html route, home page
router.get('/', (req, res) => {
	res.render('index', {user: req.user})
})

//html route for about page
router.get('/about', (req, res) => {
	res.render('about', {layout: 'main.handlebars', user: req.user})
})

// 404 error page
// app.use(function (req, res, next) {
//   res.status(404);
//   res.sendFile(path.join(__dirname + "/../public/assets/404.html"));
// })

module.exports = router