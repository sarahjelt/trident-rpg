var express = require('express')
var router = express.Router()
var db = require('../models')

// html route, home page
router.get('/', (req, res) => {
	res.render('index', {user: req.user})
})

//html route for about page
router.get('/about', (req, res) => {
	res.render('about', {layout: 'main.handlebars', user: req.user})
})

module.exports = router