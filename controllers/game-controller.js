var express = require('express')
var router = express.Router()
var game = require('../models/game.js') // do we need this with sequelize?

router.get('/', (request, result) => {
	result.render('index')

	// game.all((data) => {
	// 	var gameObj = {
	// 		game: data
	// 	}
	// 	result.render('index', gameObj)
	// })
})

router.get('/game', (request, result) => {
	result.render('index', {layout: 'phaser.handlebars'})
})

module.exports = router