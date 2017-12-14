var express = require('express')
var router = express.Router()
var db = require('../models') 

// html route, home page
router.get('/', (request, result) => {
	result.render('index')
})

// html route
// router.get('/game', (request, result) => {
// 	result.render('index', {layout: 'phaser.handlebars'})
// })

// html route 
// remove this before deploying. this was just for testing.
// router.get('/buttons', (request, result) => {
// 	result.render('buttons', )
// })
  
//html route for about page
router.get('/about', (req, res) => {
	res.render('about', {layout: 'main.handlebars'})
})

module.exports = router