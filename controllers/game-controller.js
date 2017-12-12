var express = require('express')
var router = express.Router()
var db = require('../models') 

// html route, home page
router.get('/', (request, result) => {
	result.render('index')
})

// html route
router.get('/game', (request, result) => {
	result.render('index', {layout: 'phaser.handlebars'})
})

// html route
router.get('/buttons', (request, result) => {
	result.render('buttons')
})

module.exports = router